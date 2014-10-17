Boundary
========

Boundary is a CSS+Javascript library for Chrome extension developers to easily create HTML elements that won’t affect or be affected by the current webpage’s CSS. Strongly recommended if you are considering adding a sticker, a sidebar or any overlay box using content script.

/******************************** install boundary - manifest.json ********************************/

"content_scripts": [{
    "matches": ["http://*/*", "https://*/*"],
    "css": [
        "boundary/boundary.css",
        "your-stylesheet-for-boxes.css"
    ],
    "js": [
        "boundary/jquery.js",
        "boundary/boundary.js",
        "your-content-script-javascript.js"
    ],
    "all_frames": false
}],
"web_accessible_resources": [
    "boundary/boundary-extra.css",
    "your-stylesheet-for-elements-within-box-one.css"
],

/******************************** create a box ********************************/

Boundary.createBox(attrs);

/******************************** remove a box ********************************/

$(boxSelector).remove();

/******************************** style elements within a box ********************************/

Boundary.loadBoxCSS(boxSelector, CSSPath);

/******************************** find/modify a specific boxe ********************************/

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

/******************************** helpers ********************************/

Boundary.findBoxBody(boxSelector);