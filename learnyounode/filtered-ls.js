var dir = process.argv[2];
var ext = process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dir, function (err, data) {
  if (!err) {
    data.forEach(function (file) {
      if (path.extname(file).lastIndexOf(ext) == 1) {
        console.log(file);
      }
    });
  }
});
