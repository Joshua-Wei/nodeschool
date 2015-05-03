function duckCount() {
    /*
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack')) {
            count++;
        }
    }
    return count;
    */
    
    return Array.prototype.slice.call(arguments).filter(function (arg) {
        return Object.prototype.hasOwnProperty.call(arg, 'quack');
    }).length;
}

module.exports = duckCount;
