/*
  The 5 levels of healing — System model
  After Effects rebuild of brand/five-levels-navy.png (Dietrich Klinghardt brand style).

  How to run: After Effects > File > Scripts > Run Script File... > five-levels-ae.jsx
  Creates a 3840x2160 comp where every plate, line and dot is its own shape layer
  and every piece of copy is an editable text layer.

  Fonts: install everything in the fonts/ folder first. They are static cuts of DM Sans and
  Newsreader at the exact optical sizes the approved PNG was rendered with, so glyph shapes and
  line widths match 1:1. The brand headline face is Kalice: set USE_KALICE below.
*/
(function () {

var LAYOUT = /*__LAYOUT__*/;

// true  = headline in Kalice (brand guide), if installed
// false = headline in Newsreader Op72, exactly as in the approved PNG
var USE_KALICE = true;

var S = 2;                       // layout is in 1920x1080 units, comp is 3840x2160
var COMP_NAME = LAYOUT.compName || "The 5 levels of healing — system model";
var FPS = 30;
var DURATION = 10;

var NAVY = [2 / 255, 56 / 255, 102 / 255];
var GOLD = [247 / 255, 155 / 255, 9 / 255];
var HAZE = [130 / 255, 185 / 255, 215 / 255];

// PostScript names to try, in order.
var KALICE = { family: "Kalice", light: ["Kalice-Light", "KaliceLight"], highlight: ["Kalice-Bold", "KaliceBold"] };
var NEWSREADER = { family: "Newsreader",
    light: ["NewsreaderOp72-Light", "Newsreader72pt-Light", "Newsreader-Light", "NewsreaderRoman-Light"],
    highlight: ["NewsreaderOp72-Regular", "Newsreader72pt-Regular", "Newsreader-Regular", "NewsreaderRoman-Regular"] };
var GEORGIA = { family: "Georgia", light: ["Georgia"], highlight: ["Georgia-Bold"] };
var SERIF_SETS = USE_KALICE ? [KALICE, NEWSREADER, GEORGIA] : [NEWSREADER, KALICE, GEORGIA];

var WEIGHT_NAMES = { 300: "Light", 400: "Regular", 500: "Medium", 700: "Bold" };
var SANS_FALLBACK = {
    400: ["DMSans-Regular", "DMSans18pt-Regular", "ArialMT"],
    500: ["DMSans-Medium", "DMSans18pt-Medium", "Arial-BoldMT"],
    700: ["DMSans-Bold", "DMSans18pt-Bold", "Arial-BoldMT"]
};
// Exact optical-size cut first (fonts/ folder), then stock DM Sans
function sansCandidates(size, weight) {
    return ["DMSansOp" + size + "-" + WEIGHT_NAMES[weight]].concat(SANS_FALLBACK[weight]);
}

var report = [];

// ---------------------------------------------------------------- fonts

var fontCache = {};

function fontInstalled(ps) {
    if (app.fonts && typeof app.fonts.getFontsByPostScriptName === "function") {
        var found = app.fonts.getFontsByPostScriptName(ps);
        return found && found.length > 0;
    }
    return null; // unknown on AE before 24.0
}

// Returns the first candidate AE accepts. Uses app.fonts on AE 24+, otherwise sets the
// font on a scratch text layer and reads it back.
function resolveFont(comp, candidates) {
    var key = candidates.join("|");
    if (fontCache.hasOwnProperty(key)) return fontCache[key];
    var i, chosen = null;
    var known = fontInstalled(candidates[0]);
    if (known !== null) {
        for (i = 0; i < candidates.length; i++) {
            if (fontInstalled(candidates[i])) { chosen = candidates[i]; break; }
        }
    } else {
        var probe = comp.layers.addText("probe");
        var tp = probe.property("ADBE Text Properties").property("ADBE Text Document");
        for (i = 0; i < candidates.length && !chosen; i++) {
            try {
                var td = tp.value;
                td.font = candidates[i];
                tp.setValue(td);
                if (tp.value.font === candidates[i]) chosen = candidates[i];
            } catch (e) {}
        }
        probe.remove();
    }
    if (!chosen) chosen = candidates[candidates.length - 1];
    fontCache[key] = chosen;
    return chosen;
}

function resolveSerif(comp) {
    for (var i = 0; i < SERIF_SETS.length; i++) {
        var set = SERIF_SETS[i];
        var light = resolveFont(comp, set.light.concat(["__none__"]));
        if (light !== "__none__") {
            var hi = resolveFont(comp, set.highlight.concat([light]));
            return { family: set.family, light: light, highlight: hi };
        }
    }
    return { family: "Georgia", light: "Georgia", highlight: "Georgia-Bold" };
}

// ---------------------------------------------------------------- helpers

function sc(p) { return [p[0] * S, p[1] * S]; }

function xform(layer) { return layer.property("ADBE Transform Group"); }

function setAnchorAndPosition(layer, pt) {
    xform(layer).property("ADBE Anchor Point").setValue([0, 0]);
    xform(layer).property("ADBE Position").setValue(pt);
}

function bboxCenter(items) {
    var minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9, i, j, p;
    for (i = 0; i < items.length; i++) {
        var it = items[i];
        var pts = it.kind === "ellipse"
            ? [[it.center[0] - it.radius[0], it.center[1] - it.radius[1]], [it.center[0] + it.radius[0], it.center[1] + it.radius[1]]]
            : it.points;
        for (j = 0; j < pts.length; j++) {
            p = pts[j];
            if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0];
            if (p[1] < minY) minY = p[1]; if (p[1] > maxY) maxY = p[1];
        }
    }
    return [(minX + maxX) / 2 * S, (minY + maxY) / 2 * S];
}

// items are in paint order (first = bottom). AE draws the first group in the stack on top,
// so groups are added from the last item to the first.
function addShapeLayer(comp, name, items) {
    var layer = comp.layers.addShape();
    layer.name = name;
    var origin = bboxCenter(items);
    setAnchorAndPosition(layer, origin);

    for (var i = items.length - 1; i >= 0; i--) {
        var it = items[i];
        var root = layer.property("ADBE Root Vectors Group");
        var grp = root.addProperty("ADBE Vector Group");
        grp.name = it.name;
        var gi = root.numProperties;
        var vec = function () { return layer.property("ADBE Root Vectors Group").property(gi).property("ADBE Vectors Group"); };

        if (it.kind === "ellipse") {
            var el = vec().addProperty("ADBE Vector Shape - Ellipse");
            el.property("ADBE Vector Ellipse Size").setValue([it.radius[0] * 2 * S, it.radius[1] * 2 * S]);
            el.property("ADBE Vector Ellipse Position").setValue([it.center[0] * S - origin[0], it.center[1] * S - origin[1]]);
        } else {
            var verts = [];
            for (var k = 0; k < it.points.length; k++) {
                verts.push([it.points[k][0] * S - origin[0], it.points[k][1] * S - origin[1]]);
            }
            var shp = new Shape();
            shp.vertices = verts;
            shp.closed = it.closed;
            var pg = vec().addProperty("ADBE Vector Shape - Group");
            pg.name = "Path";
            pg.property("ADBE Vector Shape").setValue(shp);
        }
        // SVG paints stroke over fill: in AE the stroke must sit above the fill in the group
        if (it.stroke) {
            var st = vec().addProperty("ADBE Vector Graphic - Stroke");
            st.property("ADBE Vector Stroke Color").setValue(it.stroke.rgb);
            st.property("ADBE Vector Stroke Opacity").setValue(it.stroke.opacity * 100);
            st.property("ADBE Vector Stroke Width").setValue(it.stroke.width * S);
        }
        if (it.fill) {
            var fl = vec().addProperty("ADBE Vector Graphic - Fill");
            fl.property("ADBE Vector Fill Color").setValue(it.fill.rgb);
            fl.property("ADBE Vector Fill Opacity").setValue(it.fill.opacity * 100);
        }
    }
    return layer;
}

function addText(comp, name, lines, o) {
    var str = lines.join("\r");
    var layer = comp.layers.addText(str);
    layer.name = name;
    var tp = layer.property("ADBE Text Properties").property("ADBE Text Document");
    var td = tp.value;
    try { td.resetCharStyle(); } catch (e1) {}
    try { td.resetParagraphStyle(); } catch (e2) {}
    td.text = str;
    td.font = o.font;
    td.fontSize = o.size * S;
    td.applyFill = true;
    td.fillColor = o.color;
    td.applyStroke = false;
    td.tracking = Math.round(o.tracking);
    td.justification = ParagraphJustification.LEFT_JUSTIFY;
    if (lines.length > 1) {
        try { td.autoLeading = false; } catch (e3) {}
        td.leading = o.leading * S;
    }
    tp.setValue(td);
    setAnchorAndPosition(layer, [o.x * S, o.y * S]);
    if (o.rotation) xform(layer).property("ADBE Rotate Z").setValue(o.rotation);
    if (o.opacity !== undefined && o.opacity < 1) xform(layer).property("ADBE Opacity").setValue(o.opacity * 100);
    return layer;
}

// Signature-gradient atmosphere: a coloured solid shown through a radial luma matte.
// Reproduces CSS radial-gradient(<rx> <ry> at <cx> <cy>, color a, transparent <stop>).
function addGlow(comp, folder, name, color, alpha, center, radius) {
    var w = comp.width, h = comp.height;
    var fill = comp.layers.addSolid(color, name, w, h, 1, comp.duration);
    fill.source.parentFolder = folder;
    xform(fill).property("ADBE Opacity").setValue(alpha * 100);

    var rx = radius[0] * S, ry = radius[1] * S;
    var side = Math.ceil(rx * 2) + 4;
    var matte = comp.layers.addSolid([0, 0, 0], name + " matte", side, side, 1, comp.duration);
    matte.source.parentFolder = folder;
    var ramp = matte.property("ADBE Effect Parade").addProperty("ADBE Ramp");
    ramp.property("ADBE Ramp-0001").setValue([side / 2, side / 2]);
    ramp.property("ADBE Ramp-0002").setValue([1, 1, 1]);
    ramp.property("ADBE Ramp-0003").setValue([side / 2 + rx, side / 2]);
    ramp.property("ADBE Ramp-0004").setValue([0, 0, 0]);
    ramp.property("ADBE Ramp-0005").setValue(2); // radial
    xform(matte).property("ADBE Anchor Point").setValue([side / 2, side / 2]);
    xform(matte).property("ADBE Position").setValue([center[0] * S, center[1] * S]);
    xform(matte).property("ADBE Scale").setValue([100, ry / rx * 100]);

    if (typeof fill.setTrackMatte === "function") {
        fill.setTrackMatte(matte, TrackMatteType.LUMA);
    } else {
        fill.trackMatteType = TrackMatteType.LUMA; // matte sits directly above
    }
    matte.enabled = false;
    return fill;
}

// ---------------------------------------------------------------- build

app.beginUndoGroup("Build: The 5 levels of healing");

var proj = app.project || app.newProject();
var folder = proj.items.addFolder("The 5 levels of healing");
var solids = proj.items.addFolder("Solids");
solids.parentFolder = folder;

var comp = proj.items.addComp(COMP_NAME, LAYOUT.width * S, LAYOUT.height * S, 1, DURATION, FPS);
comp.parentFolder = folder;
var BG = LAYOUT.bg || NAVY;
comp.bgColor = BG;

var serif = resolveSerif(comp);
report.push("Headline: " + serif.light + " / " + serif.highlight);
var sansUsed = {};

// Background + atmosphere (matches body.navy::before)
var bg = comp.layers.addSolid(BG, "Background — Navy #023866", comp.width, comp.height, 1, comp.duration);
bg.source.parentFolder = solids;
// Glows in paint order (first = lowest). Defaults reproduce the System model slide.
var GLOWS = LAYOUT.glows && LAYOUT.glows.length ? LAYOUT.glows : [
    { name: "Atmosphere — sky haze", color: HAZE, alpha: 0.22, center: [768, 756], radius: [1728 * 0.7, 540 * 0.7] },
    { name: "Atmosphere — gold base", color: GOLD, alpha: 0.30, center: [576, 1274.4], radius: [2304 * 0.6, 648 * 0.6] }
];
for (var gi = 0; gi < GLOWS.length; gi++) {
    addGlow(comp, solids, GLOWS[gi].name, GLOWS[gi].color, GLOWS[gi].alpha, GLOWS[gi].center, GLOWS[gi].radius);
}

function sansOpts(r) {
    var f = resolveFont(comp, sansCandidates(r.fontSize, r.weight));
    if (!sansUsed[f]) { sansUsed[f] = true; report.push("Text: " + f); }
    return {
        font: f,
        size: r.fontSize, tracking: r.tracking, color: r.color.rgb, opacity: r.color.a
    };
}

// Diagram shapes and SVG labels, in paint order
var i, s;
for (i = 0; i < LAYOUT.shapes.length; i++) {
    s = LAYOUT.shapes[i];
    if (s.type === "plate") {
        // Faces (and, for the wireframe level, its grid lines) as named groups of one layer
        var parts = s.faces.slice(0);
        for (var gl = 0; gl < s.gridLines.length; gl++) {
            var line = s.gridLines[gl];
            line.name = "Grid line " + (gl < 9 ? "0" : "") + (gl + 1);
            parts.push(line);
        }
        addShapeLayer(comp, s.name, parts);
    } else if (s.type === "text") {
        var r = s.runs[0];
        var o = sansOpts(r);
        o.x = r.x; o.y = r.y; o.rotation = r.rotation;
        addText(comp, s.name, [r.text], o);
    } else {
        var layer = addShapeLayer(comp, s.name, [s]);
        if (s.blurSigma) {
            var blur = layer.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2");
            // AE blurriness ≈ sigma / 0.3
            blur.property("ADBE Gaussian Blur 2-0001").setValue(s.blurSigma * S / 0.3);
        }
    }
}

addShapeLayer(comp, LAYOUT.footerRule.name, [LAYOUT.footerRule]);

// HTML copy: eyebrow, headline, level labels, footer
for (i = 0; i < LAYOUT.html.length; i++) {
    var block = LAYOUT.html[i];
    var g, j;
    if (block.baseName === "Headline") {
        var a = block.groups[0], b = block.groups[1];
        var full = a.lines[0] + " " + b.lines[0];
        var hl = addText(comp, "Headline", [full], {
            font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: a.x, y: a.baselines[0]
        });
        var tp = hl.property("ADBE Text Properties").property("ADBE Text Document");
        var td = tp.value;
        if (typeof td.characterRange === "function") {
            // AE 24.3+: one editable layer, highlight word in the bold cut
            var rng = td.characterRange(full.length - b.lines[0].length, full.length);
            rng.font = serif.highlight;
            tp.setValue(td);
        } else {
            // Older AE: highlight word as its own layer, placed after the light run
            td.text = a.lines[0];
            tp.setValue(td);
            hl.name = "Headline";
            var probe = addText(comp, "probe", [a.lines[0] + " " + b.lines[0].charAt(0)], {
                font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: 0, y: 0
            });
            var probeChar = addText(comp, "probe", [b.lines[0].charAt(0)], {
                font: serif.light, size: a.fontSize, tracking: a.tracking, color: a.color.rgb, x: 0, y: 0
            });
            var r1 = probe.sourceRectAtTime(0, false), r2 = probeChar.sourceRectAtTime(0, false);
            var advance = (r1.left + r1.width) - (r2.left + r2.width);
            probe.remove(); probeChar.remove();
            addText(comp, "Headline — highlight", [b.lines[0]], {
                font: serif.highlight, size: b.fontSize, tracking: b.tracking, color: b.color.rgb,
                x: a.x + advance / S, y: b.baselines[0]
            });
        }
        continue;
    }
    for (j = 0; j < block.groups.length; j++) {
        g = block.groups[j];
        var opts = sansOpts(g);
        opts.x = g.x; opts.y = g.baselines[0]; opts.leading = g.leading;
        var nm = block.baseName;
        if (block.groups.length > 1) {
            nm += " — " + ({ num: "number", name: "name", code: "code", p: "description" }[g.role] || g.role);
        }
        addText(comp, nm, g.lines, opts);
    }
}

// Reference image as a hidden guide layer, for checking the rebuild against the approved PNG
try {
    var refFile = new File(File($.fileName).parent.fsName + "/" + (LAYOUT.referenceFile || "five-levels-navy-reference.png"));
    if (refFile.exists) {
        var refItem = proj.importFile(new ImportOptions(refFile));
        refItem.parentFolder = folder;
        var ref = comp.layers.add(refItem);
        ref.name = "REFERENCE — approved PNG (guide)";
        ref.guideLayer = true;
        ref.enabled = false;
        xform(ref).property("ADBE Opacity").setValue(50);
        report.push("Reference PNG added as a hidden guide layer (top of the stack).");
    }
} catch (eRef) {}

comp.openInViewer();
app.endUndoGroup();

var missing = [];
for (var fu in sansUsed) if (sansUsed.hasOwnProperty(fu) && fu.indexOf("DMSansOp") !== 0) missing.push(fu);
if (missing.length) report.push("\nWARNING: some text fell back from the exact DM Sans cuts. Install the fonts/ folder for a 1:1 match.");

alert("Built \"" + COMP_NAME + "\" (" + comp.numLayers + " layers).\n\n" + report.join("\n") +
      (USE_KALICE && serif.family !== "Kalice" ? "\n\nKalice is not installed, so the headline uses " + serif.family + " (as in the approved PNG). Install Kalice and re-run to match the brand guide." : ""));

}());
