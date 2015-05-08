var replify = require("replify");

module.exports = scenario;

function scenario(callback) {
  var createServer = require("http").createServer;

  var server = createServer(function (req, res) {
    res.end("whatever");
  });
  var repl = replify({name : "bug-clinic"}, {__message : "REPLs are neat"});

  server.listen(8080, function () {
    callback(server, repl);
  });
}
