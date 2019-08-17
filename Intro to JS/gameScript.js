// create secretNum
var secretNum = 5;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// check if guess is correct
if (guess === secretNum) {
	alert("YOU GOT IT RIGHT");
}
// otherwise, check if higher
else if (guess > secretNum) {
	alert("Too high");
}
// otherwise, check if lower
else {
	alert("Too low")
}