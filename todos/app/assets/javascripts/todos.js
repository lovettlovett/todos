$("<ul class='todos'></ul>").appendTo("body");
// var toDoText; 

var addToDo = function(toDoText){
	$("<li class='todo'>"+toDoText+"</li>").appendTo("ul")
};

var formField = document.querySelector("form");
formField.addEventListener("submit", function(event){
	event.preventDefault();
	var toDoText = $("input").val();
	// var toDo = $("<li class='todo'>"+toDoText+"</li>").appendTo("ul")

	addToDo(toDoText);
});