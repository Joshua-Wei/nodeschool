var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var stream = through(function (chunk, encoding, next) {
        var country = chunk.country;
        if (!counts[country]) {
            counts[country] = 0;
        }
        counts[country]++;
        next();
    }, function (done) {
        counter.setCounts(counts);
        done();
    });
    
    return duplexer(stream, counter);
};
