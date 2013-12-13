// Copyright (c) 2013 David Hayes

'use strict';

module.exports = function() {
  if (global.performance && global.performance.now) {
    return global.performance.now;
  }

  // Fake it. Use +new Date() because IE sucks and doesn't have .now().
  var start = +new Date();

  return function() {
    return (+new Date() - start);
  };
};