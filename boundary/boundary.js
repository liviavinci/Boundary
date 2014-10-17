var Boundary = {};

/******************************** create a box ********************************/

Boundary.createBox = function(id, className) {
	var iframe = $('<iframe />', {
		"id" : id,
		"class" : className ? "boundary-default-iframe " + className : "boundary-default-iframe"
	});
	$("body").append(iframe);
	iframe.contents().find("head").append($("<link/>", {
		rel: "stylesheet",
		href: chrome.extension.getURL('boundary/boundary-extra.css'),
		type: "text/css"
	}));

	return iframe.contents().find("body");
};

/******************************** style elements within a box ********************************/

Boundary.loadBoxCSS = function(boxSelector, CSSPath) {
	var head = $(boxSelector).contents().find("head");
	head.append($("<link/>", {
		rel: "stylesheet",
		href: CSSPath,
		type: "text/css"
	}));
};

/******************************** find/modify a specific boxe ********************************/

Boundary.findBox = function(boxSelector) {
	return $(boxSelector).contents().find("body");
};

Boundary.rewriteBox = function(boxSelector, HTML) {
	Boundary.findBox(boxSelector).html(HTML)
};

Boundary.appendToBox = function(boxSelector, HTML) {
	Boundary.findBox(boxSelector).append(HTML)
};

Boundary.prependToBox = function(boxSelector, HTML) {
	Boundary.findBox(boxSelector).prepend(HTML)
};

/******************************** find/modify elements within all boxes ********************************/

Boundary.find = function(elemSelector) {
	return $(".boundary-default-iframe").contents().find(elemSelector);
};

Boundary.rewrite = function(elemSelector, HTML) {
	Boundary.find(elemSelector).html(HTML)
};

Boundary.append = function(elemSelector, HTML) {
	Boundary.find(elemSelector).append(HTML);
};

Boundary.prepend = function(elemSelector, HTML) {
	Boundary.find(elemSelector).prepend(HTML);
};

/******************************** find/modify elements within a specific box ********************************/

Boundary.findElemInBox = function(elemSelector, boxSelector) {
	return $(boxSelector).contents().find(elemSelector);
};

Boundary.rewriteElemInBox = function(elemSelector, boxSelector, HTML) {
	Boundary.findElemInBox(elemSelector, boxSelector).html(HTML)
};

Boundary.appendToElemInBox = function(elemSelector, boxSelector, HTML) {
	Boundary.findElemInBox(elemSelector, boxSelector).append(HTML);
};

Boundary.prependToElemInBox = function(elemSelector, boxSelector, HTML) {
	Boundary.findElemInBox(elemSelector, boxSelector).prepend(HTML);
};