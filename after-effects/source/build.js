// Injects layout.json into template.jsx and escapes every non-ASCII char so AE reads it correctly
const fs = require('fs');
// usage: node build.js template.jsx layout.json out.jsx [reference-png-name]
const [tpl, layout, out, reference] = process.argv.slice(2);
const data = JSON.parse(fs.readFileSync(layout, 'utf8'));
if (reference) data.referenceFile = reference;
let src = fs.readFileSync(tpl, 'utf8').replace('/*__LAYOUT__*/', JSON.stringify(data));
src = src.replace(/[^\x00-\x7f]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
fs.writeFileSync(out, src);
console.log('wrote', out, src.length, 'bytes');
