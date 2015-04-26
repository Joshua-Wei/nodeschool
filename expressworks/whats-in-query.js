var express = require('express');

var app = express();

app.get('/search', function (req, res) {
    var obj = {};
    for (var q in req.query) {
        obj[q] = req.query[q];
    }
    res.send(obj);
});

app.listen(process.argv[2]);
