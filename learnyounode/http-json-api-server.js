var port = Number(process.argv[2]);

var http = require('http');
var url = require('url');

var server = http.createServer(service);
server.listen(port);

function service(request, response) {
  if (request.method !== 'GET') {
    response.writeHead(400, {});
    return response.end();
  }

  var urlObj = url.parse(request.url, true);
  var result;
  if (urlObj.pathname === '/api/parsetime') {
    result = parsetime(urlObj.query['iso']);
  } else if (urlObj.pathname === '/api/unixtime') {
    result = unixtime(urlObj.query['iso']);
  } else {
    response.writeHead(404, {});
    return response.end();
  }

  response.writeHead(200, { 'contentType': 'application/json' });
  response.write(JSON.stringify(result));
  response.end();
}

function parsetime(iso) {
  var time = new Date(iso);
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(iso) {
  return {
    unixtime: new Date(iso).getTime()
  };
}
