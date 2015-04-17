var port = Number(process.argv[2]);

var http = require('http');
var map = require('through2-map');

var server = http.createServer(service);
server.listen(port);

function service(request, response) {
  if (request.method != 'POST') {
    response.end('not a POST request\n');
    return;
  }

  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
}
