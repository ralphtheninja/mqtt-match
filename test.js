const test = require('tape')
const match = require('./')

test('should not match', function (t) {
  t.same(match('foo', 'bar'), false)
  t.same(match('foo', 'FOO'), false)
  t.same(match('foo/bar', 'foo/bar/baz'), false)
  t.same(match('foo/+', 'foo'), false)
  t.same(match('foo/#', 'fooo/abcd/bar/1234'), false)
  t.same(match('+/+', 'foo'), false)
  t.same(match('+', '/foo'), false)
  t.same(match('foo/+/#', 'foo'), false)
  t.same(match('$share/group1/foo/bar', 'foo/bar/baz'), false)
  t.same(match('$share/group1/+', 'foo'), false)
  t.end()
})

test('should match', function (t) {
  t.same(match('foo', 'foo'), true)
  t.same(match('foo/bar', 'foo/bar'), true)
  t.same(match('foo/BAR', 'foo/BAR'), true)
  t.same(match('foo/+', 'foo/bar'), true)
  t.same(match('foo/+', 'foo/'), true)
  t.same(match('foo/bar/+', 'foo/bar/baz'), true)
  t.same(match('foo/+/bar/+', 'foo/abcd/bar/1234'), true)
  t.same(match('foo/#', 'foo/abcd/bar/1234'), true)
  t.same(match('foo/#', 'foo'), true)
  t.same(match('foo/+/bar/#', 'foo/abcd/bar/1234/fooagain'), true)
  t.same(match('+/+', 'foo/bar'), true)
  t.same(match('+/#', 'foo/bar/baz'), true)
  t.same(match('#', 'foo/bar/baz'), true)
  t.same(match('/+', '/foo'), true)
  t.same(match('+/+', '/foo'), true)
  t.same(match('$share/group1/+', 'foo', true), true)
  t.same(match('$share/group1/foo/bar', 'foo/bar', true), true)
  t.same(match('$share/group1/+/+', '/foo', true), true)
  t.end()
})
