var slice = Array.prototype.slice;

function logger(namespace) {
    return function () {
        var messages = [namespace];
        messages = messages.concat(slice.call(arguments));
        console.log.apply(console, messages);
    };
}

module.exports = logger;
