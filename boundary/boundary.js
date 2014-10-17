var Boundary = {};

Boundary.createBox = function(attrs) {
	if (attrs) {
		if (attrs.class) {
			attrs.class = "boundary-default-iframe " + attrs.class;
		} else {
			attrs.class = "boundary-default-iframe";
		}
	}
	var iframe = $('<iframe />', attrs);
	$("body").append(iframe);
	iframe.contents().find("head").append($("<link/>", {
		rel: "stylesheet",
		href: chrome.extension.getURL('boundary/boundary-extra.css'),
		type: "text/css"
	}));

	return iframe;
};

Boundary.loadBoxCSS = function(boxSelector, CSSPath) {
	var head = $("iframe.boundary-default-iframe" + boxSelector).contents().find("head");
	head.append($("<link/>", {
		rel: "stylesheet",
		href: CSSPath,
		type: "text/css"
	}));
};

Boundary.findBoxBody = function(boxSelector) {
	return $("iframe.boundary-default-iframe" + boxSelector).contents().find("body");
};

Boundary.rewriteBox = function(boxSelector, HTML) {
	Boundary.findBoxBody(boxSelector).html(HTML)
};

Boundary.appendToBox = function(boxSelector, HTML) {
	Boundary.findBoxBody(boxSelector).append(HTML)
};

Boundary.prependToBox = function(boxSelector, HTML) {
	Boundary.findBoxBody(boxSelector).prepend(HTML)
};

Boundary.find = function(selector) {
	return $(".boundary-default-iframe").contents().find(selector);
};

Boundary.append = function(selector, HTML) {
	Boundary.find(selector).append(HTML);
};

Boundary.prepend = function(selector, HTML) {
	Boundary.find(selector).prepend(HTML);
};