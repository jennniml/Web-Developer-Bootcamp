var age = Number(prompt("What is your age?"));

if (age < 0) {
	console.log("Error: negative age.")
}
else if (age < 18) {
	console.log("Sorry, you're not old enough to enter");
}
else if (age < 21) {
	console.log("You can enter, but cannot drink");
}
else {
	console.log("Come on in. You can drink");

	if (age == 21) {
		console.log("Happy 21st Birthday!")
	}
}

if (age % 2 == 1) {
	console.log("Your age is odd!")
}

if (age % Math.sqrt(age) === 0) {
	console.log("Perfect square!")
}