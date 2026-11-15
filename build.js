// Inline libraries, map and round data into a single self-contained index.html
const fs = require("fs");
let t = fs.readFileSync("src/template.html", "utf8");
const r = (a, b) => { t = t.split(a).join(b); };
r("/*D3*/", fs.readFileSync("node_modules/d3/dist/d3.min.js", "utf8"));
r("/*TOPO*/", fs.readFileSync("node_modules/topojson-client/dist/topojson-client.min.js", "utf8"));
r("/*WORLD*/", fs.readFileSync("node_modules/world-atlas/countries-50m.json", "utf8"));
r("/*ROUNDS*/", JSON.stringify(JSON.parse(fs.readFileSync("data/rounds.json", "utf8"))));
fs.writeFileSync("index.html", t);
console.log("built index.html");
