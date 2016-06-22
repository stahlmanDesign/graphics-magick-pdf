var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('bb-frankenstein.pdf')
.resize(240, 240)
.noProfile()
.write('frank.png', function (err) {
  if (!err) console.log('done');
});