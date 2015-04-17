var http = require('http');
var bl = require('bl');

var count = 0;
var result = [];

for (var i = 0; i < process.argv.length - 2; i++) {
  httpGet(i);
}

function httpGet(idx) {
  http.get(process.argv[idx + 2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      result[idx] = data.toString();
      count++;
      printWhenReady();
    }));
  });
}

function printWhenReady() {
  if (count === (process.argv.length - 2)) {
    result.forEach(function (o) {
      console.log(o);
    });
  }
}
