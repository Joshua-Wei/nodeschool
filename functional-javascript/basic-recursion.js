function reduce(arr, fn, initial) {
    /*
    if (!arr.length) return initial;
    initial = fn(initial, arr[0], 0, arr);
    return reduce(arr.slice(1), fn, initial);
    */
    
    // IIFE: immediately-invoked function expression
    return (function recursiveReduce(idx, val) {
        if (idx >= arr.length) return val;
        return recursiveReduce(idx + 1, fn(val, arr[idx], idx, arr));
    })(0, initial);
}

module.exports = reduce;
