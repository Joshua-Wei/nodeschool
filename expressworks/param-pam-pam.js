var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:id', function (req, res) {
    res.end(encrypt(req.params.id));
});

app.listen(process.argv[2]);

function encrypt (str) {
    return crypto.createHash('sha1').update(new Date().toDateString() + str).digest('hex');
}
