var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
  var n = 10;
  t.plan(n);
  repeatCallback(n, function () {
    t.pass('callback called');
  });
});
