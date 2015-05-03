function Spy(target, method) {
    var spy = { count: 0 };

    var origMethod = target[method];
    target[method] = function () {
        spy.count++;
        return origMethod.apply(target, arguments);
    }

    return spy;
}

module.exports = Spy;
