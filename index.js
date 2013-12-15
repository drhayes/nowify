// Copyright (c) 2013 David Hayes

'use strict';

// Start date for faking performance.now because IE sucks and doesn't have
// Date.now.
var start = +new Date();

module.exports = function() {
  if (global.performance && global.performance.now) {
    return global.performance.now();
  }

  // Fake it. Use +new Date because IE is stupid.
  return (+new Date() - start);
};