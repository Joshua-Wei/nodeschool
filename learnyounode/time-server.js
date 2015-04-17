var port = Number(process.argv[2]);

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  socket.write(strftime('%Y-%m-%d %H:%M', new Date()));
  socket.write('\n');
  socket.end();
});
server.listen(port);
