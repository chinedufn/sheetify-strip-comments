var stripCssComments = require('strip-css-comments')

module.exports = stripCommentsTransform

function stripCommentsTransform (filename, source, options, done) {
  done(null, {
    css: stripCssComments(source)
  })
}
