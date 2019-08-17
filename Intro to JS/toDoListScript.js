var todos = ["Buy New Turtle"];

// Lets HTML a half second to load before running JS 
window.setTimeout(function() {
	var input = prompt("What would you like to do?");
	while(input != "quit") {
		if (input === "new") {
			addTodos();
		}
		else if (input === "list") {
			listTodos();
		}
		else if (input === "delete") {
			delTodos();
		}
		input = prompt("What would you like to do?");
	}
	console.log("OK")
}, 500);

function addTodos() {
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Item Added!");
}

function listTodos() {
	console.log("--------------");
	todos.forEach(function(item, index) {
		console.log(index + ": " + item)
	});
	console.log("--------------");
}

function delTodos() {
	var pos = prompt("Enter the number of todo to delete");
	todos.splice(pos, 1);
	console.log("Item Deleted!");
}
