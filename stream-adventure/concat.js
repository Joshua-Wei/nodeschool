var concat = require('concat-stream');

process.stdin.pipe(concat(function (data) {
    console.log(reverse(data.toString()));
}));

function reverse (str) {
    return str.split('').reverse().join('');
}
