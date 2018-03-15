sheetify-strip-comments [![npm version](https://badge.fury.io/js/sheetify-strip-comments.svg)](http://badge.fury.io/js/sheetify-strip-comments) [![Build Status](https://travis-ci.org/chinedufn/sheetify-strip-comments.svg?branch=master)](https://travis-ci.org/chinedufn/sheetify-strip-comments)
===============

> A sheetify transform to strip comments from sheetify CSS strings

## Background / Initial Motivation

https://github.com/stackcss/sheetify/issues/151

## To Install

```sh
$ npm install --save-dev sheetify-strip-comments
```

## API

```js
var browserify = require('browserify')

var b = browserify('./some-file.js')
b.transform('sheetify', { transform: [ 'sheetify-strip-comments' ] })
b.bundle().pipe(process.stdout)
```

## CLI

```sh
browserify -t [ sheetify -t sheetify-strip-comments ] index.js > bundle.js
```

## See Also

- [sheetify](https://github.com/stackcss/sheetify/)

## License

MIT

