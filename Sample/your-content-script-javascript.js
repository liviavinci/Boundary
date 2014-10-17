$(document).ready(function() {

	/* create & init one box */
	var yourBoxOneID = Boundary.createBox("yourBoxOneID");
	Boundary.loadBoxCSS("#yourBoxOneID", chrome.extension.getURL('your-stylesheet-for-elements-within-boxes.css'));
	/* modify box one content */
	Boundary.rewriteBox("#yourBoxOneID", "<div id='message'>Hi there!</div>");
	Boundary.appendToBox("#yourBoxOneID", "<div><button class='button'>Click me first!</button></div>");
	/* add some silly interaction to box one */
	Boundary.findElemInBox(".button", "#yourBoxOneID").click(function() {
		Boundary.appendToElemInBox("#message", "#yourBoxOneID", "<br>Now click on the second button.");
	});

	/* create & init a second box */
	var yourBoxTwoID = Boundary.createBox("yourBoxTwoID", "yourboxTwoClassName");
	Boundary.loadBoxCSS("#yourBoxTwoID", chrome.extension.getURL('your-stylesheet-for-elements-within-boxes.css'));
	/* modify box content */
	Boundary.prependToBox("#yourBoxTwoID",
		"<div id='message'></div>" +
		"<div><button class='button'>Click me second!</button></div>"
	);
	/* add some silly interaction to box two */
	Boundary.findElemInBox(".button", "#yourBoxTwoID").click(function() {
		Boundary.find(".button").remove();
		Boundary.rewrite("#message", "Tutorial completed!");
	});
});