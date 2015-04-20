var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {
    var obj;
    var read = through(function (buffer, _, next) {
        if (buffer.length === 0) {
            return next();
        }
        
        var entry = JSON.parse(buffer);
        if (entry.type === 'genre') {
            if (obj) {
                this.push(JSON.stringify(obj) + '\n');
            }
            obj = new Object();
            obj.name = entry.name;
            obj.books = [];
        } else if (entry.type === 'book') {
            obj.books.push(entry.name);
        }
        next();
    }, function (done) {
        if (obj) {
            this.push(JSON.stringify(obj));
        }
        done();
    });

    var gzip = zlib.createGzip();

    return combine(split(), read, gzip);
};
