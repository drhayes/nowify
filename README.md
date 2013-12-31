nowify
======

performance.now() polyfill that works with browserify.

## Usage

First:

    npm install nowify

Then:

    var now = require('nowify');

    var start = now();
    setTimeout(function() {
      var end = now();
      alert(end - start);
    }, 10);

And that's it!
