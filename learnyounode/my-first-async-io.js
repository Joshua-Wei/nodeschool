var fname = process.argv[2];
var fs = require('fs');
fs.readFile(fname, 'utf8', function (err, data) {
  if (!err) {
    var lines = data.split('\n');
    console.log(lines.length - 1);
  }
});
