var test = require('tape');
var feedCat = require(process.argv[2]);

test('feedCat', function (t) {
  t.equals(feedCat('salmon'), 'yum');
  t.throws(function () {
    feedCat('chocolate');
  });
  t.end();
});
