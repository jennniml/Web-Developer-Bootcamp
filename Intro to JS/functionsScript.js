function isEven(num) {
	return num % 2 === 0;
}

function factorial(num) {
	var product = 1;
	for (var i = num; i > 0; i--) {
		product *= i
	}
	return product;
}

function kebabToSnake(kebab) {
	var snake = "";
	for (var i = 0; i < kebab.length; i++) {
		if (kebab[i] == '-') {
			snake += '_';
		}
		else
			snake += kebab[i];
	}
	return snake;
}