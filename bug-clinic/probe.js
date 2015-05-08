var http = require("http");
var jstrace = require("jstrace");

var server = http.createServer(function (req, res) {
  jstrace("request:start", {url : req.url});
  
  var statusCode;
  var body;
  
  if (req.method === "GET" && req.url === "/prognosis") {
    statusCode = 200;
    body = '{"ok" : true}';
  } else {
    statusCode = 404;
    body = '{"error" : "notfound"}';
  }
  
  res.writeHead(statusCode);
  res.write(body);
  res.end("\n");
  
  jstrace("request:end", {
    statusCode: statusCode,
    body: body
  });
});

server.listen(9999, "localhost", function () {
  console.error("up");
});
