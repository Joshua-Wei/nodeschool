var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through2');

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

var gunzip = zlib.createGunzip();

var parser = tar.Parse();
parser.on('entry', function (e) {
    if (e.type === 'File') {
        e.pipe(crypto.createHash('md5', { encoding: 'hex' })).pipe(through(function (buffer, _, next) {
            this.push(buffer.toString() + ' ' + e.path + '\n');
            next();
        })).pipe(process.stdout);
    }
});

process.stdin.pipe(decipher).pipe(gunzip).pipe(parser);
