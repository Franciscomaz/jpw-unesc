const fs = require('fs');

const nullSafeWords = process.argv.splice(2).filter(word => word);
const words = new Set(nullSafeWords);

var json = JSON.stringify([...words]);

fs.writeFileSync("data.json", json, { encoding: "utf8" });