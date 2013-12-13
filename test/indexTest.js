// Copyright (c) 2013 David Hayes
/* global describe, it */

'use strict';

var perfnow = require('../index');
var assert = require('assert');
var sinon = require('sinon');

describe('performance.now polyfill', function() {
  it('returns performance.now if it exists', function() {
    global.performance = {
      now: sinon.spy()
    };
    var now = perfnow();
    assert.equal(global.performance.now, now);
    delete global.performance;
  });

  it('uses Date if it cannot find performance.now', function(done) {
    var now = perfnow();
    var start = now();
    setTimeout(function() {
      var end = now();
      assert(end > start);
      assert(end - start > 0);
      done();
    }, 10);
  });

  it('is still monotonic without real performance.now', function(done) {
    var now = perfnow();
    var one = now();
    setTimeout(function() {
      var two = now();
      setTimeout(function() {
        var three = now();
        assert(three > two > one);
        done();
      }, 10);
    }, 10);
  });
});