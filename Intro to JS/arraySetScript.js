window.setTimeout(function() {
	var choice = prompt("Choose a function to run");
	while(choice !== "5") {
		if (choice === "1") {
			var arr = [];
			makeArr(arr);
			printReverse(arr);
			console.log("-------------");
		}
		if (choice === "2") {
			var arr = [];
			makeArr(arr);
			console.log(isUniform(arr));
			console.log("-------------");
		}
		if (choice === "3") {
			var arr = [];
			makeArr(arr);
			sumArray(arr);
			console.log("-------------");
		}
		if (choice === "4") {
			var arr = [];
			makeArr(arr);
			max(arr);
			console.log("-------------");
		}
		choice = prompt("Choose a function to run");
	}
}, 500);

function makeArr(array) {
	var total = prompt("Input # of elements in array");
	for (var i = 0; i < total; i++) {
		var element = prompt("Input element");
		array.push(element);
	}
}

function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	var compare = array[0];
	for (var i = 1; i < array.length; i++) {
		if (compare !== array[i]) {
			return false;
		}	
	}
	return true;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(num) {
		sum += Number(num);
	});
	console.log("Sum is " + sum);
}

function max(array) {
	var max = Number(array[0]);
	for (var i = 1; i < array.length; i++) {
		if (Number(array[i]) > max) {
			max = array[i];
		}
	}
	console.log("Max is " + max);
}
