var fname = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(fname);
var lines = buf.toString().split('\n');
console.log(lines.length - 1);
