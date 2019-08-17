// Lecture 183

// Select all divs and give them a purple background
// $("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
// $("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
// $("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pin
// $("div:first-of-type").css("color", "pink");



// Lecture 191
$("#but").on("click", function() {
	$("div.off").fadeOut(1000, function() {
		//$("div.off").css("display", "none");
	});
});

$("#ton").on("click", function() {
	$("div.off").fadeIn(1000);
});

$("#tog").on("click", function() {
	$("div.off").fadeToggle(500);
});

$("#sdown").on("click", function() {
	$("div.off").slideDown();
});

$("#sup").on("click", function() {
	$("div.off").slideUp();
});

$("#stog").on("click", function() {
	$("div.off").slideToggle();
});
