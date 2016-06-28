#README

##This example shows how to extract a preview image from a PDF file.


`node example.js` will open `bb-frankenstein.pdf` and save `frank.png` image

## contents of `example.js` :
``` javascript
var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('bb-frankenstein.pdf')
.resize(240, 240)
.noProfile()
.write('frank.png', function (err) {
  if (!err) console.log('done');
});
```
##More info
https://github.com/aheckmann/gm