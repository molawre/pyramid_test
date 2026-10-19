// Loads a brand slide (brand/five-levels.html in the navy theme, or any slide that tags its
// parts with data-name / data-block) and dumps every shape, text run and glow with exact
// comp coordinates, so the AE script can rebuild the layout 1:1.
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const [htmlPath, outPath] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.goto('file://' + htmlPath + (process.argv[4] || '?theme=navy'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(400);

  const data = await p.evaluate(() => {
    const num = v => parseFloat(v);
    const parseColor = s => {
      if (!s || s === 'none') return null;
      if (s[0] === '#') {
        const h = s.slice(1);
        return { rgb: [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16) / 255), a: 1 };
      }
      const m = s.match(/rgba?\(([^)]+)\)/);
      const parts = m[1].split(',').map(x => parseFloat(x));
      return { rgb: parts.slice(0, 3).map(x => x / 255), a: parts.length > 3 ? parts[3] : 1 };
    };

    // ---------- SVG shapes, in paint order ----------
    const shapes = [];
    const svg = document.getElementById('art');
    const svgTexts = [];
    let plateIdx = 0, gridIdx = 0, tickIdx = 0, leaderIdx = 0, dotIdx = 0, bracketIdx = 0;
    const plateNames = ['01 Physical body', '02 Energy body', '03 Mental body', '04 Intuitive body', '05 Spiritual dimension'];
    const bracketNames = ['Emotional body', 'Soul'];

    const styleOf = n => {
      const fill = parseColor(n.getAttribute('fill'));
      const stroke = parseColor(n.getAttribute('stroke'));
      const fo = n.hasAttribute('fill-opacity') ? num(n.getAttribute('fill-opacity')) : 1;
      const so = n.hasAttribute('stroke-opacity') ? num(n.getAttribute('stroke-opacity')) : 1;
      return {
        fill: fill && { rgb: fill.rgb, opacity: fill.a * fo },
        stroke: stroke && { rgb: stroke.rgb, opacity: stroke.a * so, width: num(n.getAttribute('stroke-width') || 1) },
      };
    };
    const geom = n => {
      const t = n.tagName;
      if (t === 'polygon') {
        const pts = n.getAttribute('points').trim().split(/\s+/).map(pr => pr.split(',').map(Number));
        return { kind: 'path', closed: true, points: pts };
      }
      if (t === 'line') {
        return { kind: 'path', closed: false, points: [[num(n.getAttribute('x1')), num(n.getAttribute('y1'))], [num(n.getAttribute('x2')), num(n.getAttribute('y2'))]] };
      }
      if (t === 'path') {
        const nums = n.getAttribute('d').match(/-?\d+(\.\d+)?/g).map(Number);
        const pts = [];
        for (let i = 0; i < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
        return { kind: 'path', closed: /z/i.test(n.getAttribute('d')), points: pts };
      }
      if (t === 'circle') return { kind: 'ellipse', center: [num(n.getAttribute('cx')), num(n.getAttribute('cy'))], radius: [num(n.getAttribute('r')), num(n.getAttribute('r'))] };
      if (t === 'ellipse') return { kind: 'ellipse', center: [num(n.getAttribute('cx')), num(n.getAttribute('cy'))], radius: [num(n.getAttribute('rx')), num(n.getAttribute('ry'))] };
      return null;
    };
    const item = (n, name) => Object.assign({ name }, geom(n), styleOf(n));

    const textRun = (n) => {
      // SVG text: baseline start point after its own transform
      const cs = getComputedStyle(n);
      const start = n.getStartPositionOfChar(0);
      let x = start.x, y = start.y, rotation = 0;
      const tr = n.getAttribute('transform');
      if (tr) {
        const m = tr.match(/rotate\(([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\)/);
        rotation = num(m[1]);
        const a = rotation * Math.PI / 180, cx = num(m[2]), cy = num(m[3]);
        const dx = x - cx, dy = y - cy;
        x = cx + dx * Math.cos(a) - dy * Math.sin(a);
        y = cy + dx * Math.sin(a) + dy * Math.cos(a);
      }
      return {
        text: cs.textTransform === 'uppercase' ? n.textContent.toUpperCase() : n.textContent, x, y, rotation,
        fontSize: num(cs.fontSize), weight: num(cs.fontWeight), family: 'sans',
        tracking: num(cs.letterSpacing) / num(cs.fontSize) * 1000,
        color: parseColor(cs.fill),
      };
    };

    const children = [...svg.children];
    for (const n of children) {
      const t = n.tagName;
      if (t === 'defs') continue;
      if (t === 'g') {
        const name = n.dataset.name ? null : plateNames[plateIdx++];
        const kids = [...n.children];
        const faces = [];
        const gridLines = [];
        let polyIdx = 0;
        const hasSides = kids.filter(k => k.tagName === 'polygon').length === 3;
        for (const k of kids) {
          if (k.tagName === 'polygon') {
            const faceName = k.dataset.name || (hasSides ? ['Left side', 'Right side', 'Top face'][polyIdx++] : 'Top face');
            faces.push(item(k, faceName));
          } else if (k.tagName === 'line') {
            gridLines.push(item(k, 'Grid line'));
          }
        }
        shapes.push({ type: 'plate', name: n.dataset.name || ('Plate ' + name), faces, gridLines });
        continue;
      }
      if (t === 'text') {
        const run = textRun(n);
        shapes.push({ type: 'text', name: n.dataset.name || ('Label ' + run.text), runs: [run] });
        continue;
      }
      // Name loose shapes by what they are
      let name = n.dataset.name;
      const g = geom(n);
      if (name) {}
      else if (t === 'line' && g.points[0][1] === 270) name = 'Grid ' + String(++gridIdx).padStart(2, '0');
      else if (t === 'ellipse') name = 'Stack shadow';
      else if (t === 'line' && g.points[0][0] === g.points[1][0]) name = 'Axis line';
      else if (t === 'path' && !g.closed && g.points.length === 3 && g.points[0][1] === g.points[2][1] && g.points[0][0] < g.points[2][0]) name = 'Axis arrowhead';
      else if (t === 'line' && g.points[1][0] - g.points[0][0] === 16) name = 'Axis tick ' + String(++tickIdx).padStart(2, '0');
      else if (t === 'line') name = 'Leader ' + plateNames[leaderIdx++];
      else if (t === 'circle') name = 'Dot ' + plateNames[dotIdx++];
      else if (t === 'path') name = 'Bracket ' + bracketNames[bracketIdx++];
      const it = item(n, name);
      if (t === 'ellipse' && n.getAttribute('filter')) it.blurSigma = 18;
      shapes.push(Object.assign({ type: 'shape' }, it));
    }

    // ---------- HTML text, split into exact lines with baselines ----------
    const htmlTexts = [];
    const runsOf = (el) => {
      // Collect text nodes with their styling element
      const out = [];
      const walk = node => {
        for (const c of node.childNodes) {
          if (c.nodeType === 3 && c.textContent.trim()) out.push(c);
          else if (c.nodeType === 1) walk(c);
        }
      };
      walk(el);
      return out;
    };
    const measureNode = (tn) => {
      const el = tn.parentElement;
      const cs = getComputedStyle(el);
      const txt = tn.textContent;
      // Group characters into visual lines
      const lines = [];
      for (let i = 0; i < txt.length; i++) {
        const r = document.createRange();
        r.setStart(tn, i); r.setEnd(tn, i + 1);
        const rect = r.getClientRects()[0];
        if (!rect) continue;
        const top = Math.round(rect.top);
        let line = lines.find(l => Math.abs(l.top - top) < 3);
        if (!line) { line = { top, start: i, end: i, x: rect.left }; lines.push(line); }
        line.end = i;
        line.x = Math.min(line.x, rect.left);
      }
      return { el, cs, txt, lines };
    };

    const tagged = [...document.querySelectorAll('[data-block]')];
    const htmlEls = tagged.length ? tagged.map(e => [e.dataset.block, e]) : [
      ['Eyebrow', document.querySelector('.eyebrow')],
      ['Headline', document.querySelector('h1')],
      ...[...document.querySelectorAll('.label')].map((l, i) => [`Level ${l.querySelector('.num').textContent}`, l]),
      ['Footer left', document.querySelector('.footer span:first-child')],
      ['Footer right', document.querySelector('.footer span:last-child')],
    ];

    for (const [baseName, el] of htmlEls) {
      const nodes = runsOf(el);
      // Measure every line before any DOM probing happens
      htmlTexts.push({ baseName, el, measured: nodes.map(measureNode) });
    }

    // Baseline probe: insert marker spans after all measurement is done (they do not affect layout)
    const results = [];
    for (const { baseName, el, measured } of htmlTexts) {
      const groups = [];
      for (const m of measured) {
        const tn = [...m.el.childNodes].find(c => c.nodeType === 3 && c.textContent === m.txt);
        // One zero-size inline-block at the start of the block: its bottom edge is the first baseline.
        // Later lines sit exactly one line-height lower (single font per block).
        const mk = document.createElement('span');
        mk.style.cssText = 'display:inline-block;width:0;height:0;';
        m.el.insertBefore(mk, tn.splitText(m.lines[0].start));
        const lh = num(m.cs.lineHeight) || num(m.cs.fontSize) * 1.2;
        const b0 = mk.getBoundingClientRect().bottom;
        const tt = m.cs.textTransform;
        const lineTexts = m.lines.map(l => {
          let s = m.txt.slice(l.start, l.end + 1).trim();
          if (tt === 'uppercase') s = s.toUpperCase();
          return s;
        });
        const baselines = m.lines.map((_, i) => b0 + i * lh);
        const isSerif = /Newsreader|Kalice/.test(m.cs.fontFamily);
        groups.push({
          el: m.el,
          role: m.el.className || m.el.tagName.toLowerCase(),
          lines: lineTexts,
          x: m.lines[0].x,
          baselines,
          fontSize: num(m.cs.fontSize),
          weight: num(m.cs.fontWeight),
          family: isSerif ? 'serif' : 'sans',
          tracking: m.cs.letterSpacing === 'normal' ? 0 : num(m.cs.letterSpacing) / num(m.cs.fontSize) * 1000,
          color: parseColor(m.cs.color),
          leading: lh,
        });
      }
      results.push({ baseName, groups: groups.map(({ el, ...g }) => g) });
    }

    // Footer rule (CSS border-top)
    const footer = document.querySelector('.footer');
    const fr = footer.getBoundingClientRect();
    const fcs = getComputedStyle(footer);
    const rule = {
      type: 'shape', name: 'Footer rule', kind: 'path', closed: false,
      points: [[fr.left, fr.top + 0.5], [fr.right, fr.top + 0.5]],
      fill: null,
      stroke: (() => { const c = parseColor(fcs.borderTopColor); return { rgb: c.rgb, opacity: c.a, width: num(fcs.borderTopWidth) }; })(),
    };

    const glows = (window.GLOWS || []).map(g => ({ name: g.name, color: g.color.map(v => v / 255), alpha: g.alpha, center: g.center, radius: g.radius }));
    const bg = parseColor(getComputedStyle(document.body).backgroundColor).rgb;
    return { width: 1920, height: 1080, compName: document.title, bg, glows, shapes, html: results, footerRule: rule };
  });

  fs.writeFileSync(outPath, JSON.stringify(data, null, 1));
  console.log('shapes', data.shapes.length, 'html blocks', data.html.length);
  await b.close();
})();
