var fs = require('fs')
var test = require('tape')
var path = require('path')

var cssFixturePath = path.resolve(__dirname, './fixture.css')
var cssSource = fs.readFileSync(cssFixturePath, 'utf8')

var stripCommentsTransform = require('./')

test('Remove CSS comments', function (t) {
  t.plan(2)

  t.ok(cssSource.match(/Comment should be stripped/), 'CSS file starts off with a comment')

  stripCommentsTransform(cssFixturePath, cssSource, null, function (err, actual) {
    if (err) { throw err }

    t.notOk(actual.css.match(/Comment should be stripped/), 'Transform strips comment')
  })

  t.end()
})
