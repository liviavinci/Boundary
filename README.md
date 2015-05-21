Boundary 
========

Boundary is a CSS+Javascript library for Chrome extension developers to easily create HTML elements that won’t affect or be affected by the current webpage’s CSS. Strongly recommended if you are considering adding a sticker, a sidebar or any overlay box using content script.


/******************************** install  ********************************/

Take a look at Sample manifest.json.


/******************************** create a box ********************************/

Boundary.createBox(id, className);


/******************************** remove a box ********************************/

$(boxSelector).remove();


/******************************** style elements within a box ********************************/

Boundary.loadBoxCSS(boxSelector, CSSPath);


/******************************** find/modify a specific boxe ********************************/

Boundary.findBox(boxSelector);

Boundary.rewriteBox(boxSelector, HTML);

Boundary.appendToBox(boxSelector, HTML);

Boundary.prependToBox(boxSelector, HTML);


/******************************** find/modify elements within all boxes ********************************/

Boundary.find(elemSelector);

Boundary.rewrite(elemSelector, HTML);

Boundary.append(elemSelector, HTML);

Boundary.prepend(elemSelector, HTML);


/******************************** find/modify elements within a specific box ********************************/

Boundary.findElemInBox(elemSelector, boxSelector);

Boundary.rewriteElemInBox(elemSelector, boxSelector, HTML);

Boundary.appendToElemInBox(elemSelector, boxSelector, HTML);

Boundary.prependToElemInBox(elemSelector, boxSelector, HTML)



NOTES:

If you what to do

Boundary.find().click(function() {
});

It's recommented that you return false within the callback function.





/******************************** The MIT License (MIT)  ********************************/

Copyright (c) 2015 Livia Zhang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
