'use strict';

var stream;
try {
  stream = require('readable-stream');
} catch (e) {
  stream = require('stream');
}

var util = require('util');

function Chunker(opts) {
  if (!(this instanceof Chunker)) {
    return new Chunker(opts);
  }

  if (typeof opts === 'number') {
    opts = { chunkSize: opts };
  }

  opts = opts || {};
  opts.objectMode = true;
  stream.Transform.call(this, opts);

  this.chunkSize = opts.chunkSize || 10;

  this.currentChunk = [];
}

util.inherits(Chunker, stream.Transform);

Chunker.prototype._transform = function(chunk, encoding, callback) {
  var newLength = this.currentChunk.push(chunk);

  if (newLength >= this.chunkSize) {
    callback(null, this.currentChunk);
    this.currentChunk = [];
  } else {
    callback();
  }
};

Chunker.prototype._flush = function(callback) {
  if (this.currentChunk.length !== 0) {
    this.push(this.currentChunk);
  }
  callback();
};

module.exports = Chunker;
