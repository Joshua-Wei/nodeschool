var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
    res.end(reverse(req.body.str));
});

app.listen(process.argv[2]);

function reverse(str) {
    return str.split('').reverse().join('');
}
