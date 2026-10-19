# Static instances of the OFL variable fonts at the exact optical sizes the approved PNG used,
# so After Effects (named instances only) renders identical glyph shapes and widths.
import sys, os
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

src_dir, out_dir = sys.argv[1], sys.argv[2]
WEIGHTS = {300: 'Light', 400: 'Regular', 500: 'Medium', 700: 'Bold'}
JOBS = [
    ('dmsans.ttf', 'DM Sans', 'DMSans', [(13, 500), (14, 500), (15, 500), (18, 400), (18, 500), (22, 500), (26, 700)]),
    ('newsreader.ttf', 'Newsreader', 'Newsreader', [(72, 300), (72, 400)]),
]
for fname, fam, ps_base, combos in JOBS:
    for opsz, wght in combos:
        f = TTFont(os.path.join(src_dir, fname))
        inst = instancer.instantiateVariableFont(f, {'opsz': opsz, 'wght': wght})
        style = WEIGHTS[wght]
        family = f'{fam} Op{opsz}'
        ps = f'{ps_base}Op{opsz}-{style}'
        name = inst['name']
        for rec in list(name.names):
            if rec.nameID in (1, 2, 3, 4, 6, 16, 17, 25):
                name.removeNames(nameID=rec.nameID)
        # Each instance is its own family with one style, so every app lists it unambiguously
        name.setName(family + ' ' + style, 1, 3, 1, 0x409)
        name.setName('Regular', 2, 3, 1, 0x409)
        name.setName(f'{ps};instance;opsz={opsz};wght={wght}', 3, 3, 1, 0x409)
        name.setName(f'{family} {style}', 4, 3, 1, 0x409)
        name.setName(ps, 6, 3, 1, 0x409)
        name.setName(family, 16, 3, 1, 0x409)
        name.setName(style, 17, 3, 1, 0x409)
        for t in ('STAT',):
            if t in inst: del inst[t]
        inst['OS/2'].usWeightClass = wght
        out = os.path.join(out_dir, ps + '.ttf')
        inst.save(out)
        print(out, os.path.getsize(out))
