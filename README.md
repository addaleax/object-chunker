object-chunker
==============

[![NPM Version](https://img.shields.io/npm/v/object-chunker.svg?style=flat)](https://npmjs.org/package/object-chunker)
[![NPM Downloads](https://img.shields.io/npm/dm/object-chunker.svg?style=flat)](https://npmjs.org/package/object-chunker)
[![Build Status](https://travis-ci.org/addaleax/object-chunker.svg?style=flat&branch=master)](https://travis-ci.org/addaleax/object-chunker?branch=master)
[![Coverage Status](https://coveralls.io/repos/addaleax/object-chunker/badge.svg?branch=master)](https://coveralls.io/r/addaleax/object-chunker?branch=master)
[![Dependency Status](https://david-dm.org/addaleax/object-chunker.svg?style=flat)](https://david-dm.org/addaleax/object-chunker)

Chunk object-mode streams

Install:
`npm install object-chunker`

```js
// Create
const chunker = require('object-chunker');

// Read objects from input, generate arrays with up to 42 entries from it
input.pipe(chunker(42)).pipe(...)
```

License
=======

MIT
