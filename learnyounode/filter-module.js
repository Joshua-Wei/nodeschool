module.exports = filter;

function filter(dir, ext, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dir, function (err, list) {
    if (err) {
      callback(err);
      return;
    }

    list = list.filter(function (file) {
      return path.extname(file) === ('.' + ext);
    });

    callback(null, list);
  });
}
