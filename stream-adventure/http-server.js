var http = require('http');
var through = require('through2');

var tr = through(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}, function (done) {
    done();
});

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(tr).pipe(res);
    } else {
        res.end();
    }
});
server.listen(Number(process.argv[2]));
