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
