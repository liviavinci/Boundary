$(document).ready(function() {

	/* create & init one box */
	var yourBoxOne = Boundary.createBox();
	yourBoxOne.attr("id", "yourBoxOne");
	Boundary.loadBoxCSS("#yourBoxOne", chrome.extension.getURL('your-stylesheet-for-elements-within-boxes.css'));
	/* modify box one content */
	Boundary.rewriteBox("#yourBoxOne", "<div id='message'>Hi there!</div>");
	Boundary.appendToBox("#yourBoxOne", "<div><button class='button'>Click me first!</button></div>");
	/* add some silly interaction to box one */
	Boundary.findElemInBox(".button", "#yourBoxOne").click(function() {
		Boundary.appendToElemInBox("#message", "#yourBoxOne", "<br>Now click on the second button.");
	});

	/* create & init a second box */
	var yourBoxTwo = Boundary.createBox({"id": "yourBoxTwo"});
	Boundary.loadBoxCSS("#yourBoxTwo", chrome.extension.getURL('your-stylesheet-for-elements-within-boxes.css'));
	/* modify box content */
	Boundary.prependToBox("#yourBoxTwo",
		"<div id='message'></div>" +
		"<div><button class='button'>Click me second!</button></div>"
	);
	/* add some silly interaction to box two */
	Boundary.findElemInBox(".button", "#yourBoxTwo").click(function() {
		Boundary.find(".button").remove();
		Boundary.rewrite("#message", "Tutorial completed!");
	});
});