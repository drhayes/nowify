nowify
======

performance.now() polyfill that works with browserify.

## Usage

First:

    npm install nowify

Then:

    var nowify = require('nowify');

    var start = nowify();
    setTimeout(function() {
      var end = nowify();
      alert(end - start);
    }, 10);

And that's it!