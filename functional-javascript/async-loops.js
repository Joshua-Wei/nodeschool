function loadUsers(userIds, load, done) {
    var users = [];
    var loaded = 0;

    userIds.forEach(function (userId, idx) {
        load(userId, function (user) {
            users[idx] = user;
            if (++loaded === userIds.length) {
                done(users);
            }
        });
    });
}

module.exports = loadUsers;
