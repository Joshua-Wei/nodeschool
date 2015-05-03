function getShortMessages(messages) {
    return messages.map(function (obj) {
        return obj.message;
    }).filter(function (m) {
        return m.length < 50;
    });
}

module.exports = getShortMessages;
