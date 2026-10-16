# Regenerating the AE script

The script is generated from `brand/five-levels.html`, so the layout never gets re-typed by hand.

```sh
# 1. dump every shape and text baseline from the navy render (Playwright)
NODE_PATH=$(npm root -g) node extract.js "$PWD/../../brand/five-levels.html" "$PWD/layout.json"
# 2. inject it into the ExtendScript template (non-ASCII is escaped so AE reads it on any locale)
node build.js template.jsx layout.json ../five-levels-ae.jsx
# 3. static optical-size font cuts (needs fonttools and the variable DM Sans / Newsreader TTFs)
python3 make_fonts.py <dir-with-dmsans.ttf-and-newsreader.ttf> ../fonts
```
