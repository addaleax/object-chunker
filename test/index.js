'use strict';

var Chunker = require('../');
var assert = require('assert');

describe('Chunker', function() {
  it('chunks object mode stuff', function() {
    var instance = new Chunker();

    for (var i = 0; i < 105; i++) {
      instance.write({ number: i });
    }
    instance.end({ tag: 'end' });

    instance.on('data', function(data) {
      assert.ok(data.length === 10 || data[data.length-1].tag === 'end');
    });
  });

  it('chunks object mode stuff with specified size', function() {
    var instance = new Chunker({ chunkSize: 20 });

    for (var i = 0; i < 105; i++) {
      instance.write({ number: i });
    }
    instance.end({ tag: 'end' });

    instance.on('data', function(data) {
      assert.ok(data.length === 20 || data[data.length-1].tag === 'end');
    });
  });

  it('chunks object mode stuff with specified size, shorthand', function() {
    var instance = Chunker(20);

    for (var i = 0; i < 105; i++) {
      instance.write({ number: i });
    }
    instance.end({ tag: 'end' });

    instance.on('data', function(data) {
      assert.ok(data.length === 20 || data[data.length-1].tag === 'end');
    });
  });
});
