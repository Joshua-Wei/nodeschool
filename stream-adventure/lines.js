var through = require('through2');
var split = require('split');

var lower = true;

process.stdin.pipe(split()).pipe(through(function (buffer, encoding, next) {
    if (lower) {
        this.push(buffer.toString().toLowerCase());
    } else {
        this.push(buffer.toString().toUpperCase());
    }
    this.push('\n');
    lower = !lower;
    next();
}, function (done) {
    done();
})).pipe(process.stdout);
