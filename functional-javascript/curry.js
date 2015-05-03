function curryN(fn, n) {
    n = n || fn.length;
    if (n === 1) return fn;
    return function (arg) {
        return curryN(fn.bind(this, arg), n - 1);
    }
}

module.exports = curryN;

function add3(x) { return x + 3; }
function add(x, y, z) { return x + y + z; }

var curry = curryN(add3);
console.log(curry(3));

var curryC = curryN(add, 3);
var curryB = curryC(1);
var curryA = curryB(2);
console.log(curryA(3));
