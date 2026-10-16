// Injects layout.json into template.jsx and escapes every non-ASCII char so AE reads it correctly
const fs = require('fs');
const [tpl, layout, out] = process.argv.slice(2);
let src = fs.readFileSync(tpl, 'utf8').replace('/*__LAYOUT__*/', JSON.stringify(JSON.parse(fs.readFileSync(layout, 'utf8'))));
src = src.replace(/[^\x00-\x7f]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
fs.writeFileSync(out, src);
console.log('wrote', out, src.length, 'bytes');
