var port = Number(process.argv[2]);
var fname = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'contentType': 'text/plain' });
  var fstream = fs.createReadStream(fname);
  fstream.pipe(response);
});
server.listen(port);
