module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (map, item) {
        map.push(fn.call(null, item));
        return map;
    }, []);
};
