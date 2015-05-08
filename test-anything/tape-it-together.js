var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify makes fancy strings', function (t) {
  t.equals(fancify('Hello'), '~*~Hello~*~');
  t.equals(fancify('Hello', true), '~*~HELLO~*~');
  t.equals(fancify('Hello', false, '!'), '~!~Hello~!~');
  t.end();
});
