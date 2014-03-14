$("<ul class='todos'></ul>").appendTo("body");
var counter = 0;
// var toDoText; 

var addToDo = function(toDoText){
	$("<li class='todo' id='"+counter+"'>"+toDoText+"</li>").appendTo("ul")
	$("<input type='checkbox'></input>").appendTo("li#"+counter);
	$("<button>"+'x'+"</input>").appendTo("li#"+counter);
	counter++;
};

var formField = document.querySelector("form");
formField.addEventListener("submit", function(event){
	event.preventDefault();
	var toDoText = $("input").val();
	// var toDo = $("<li class='todo'>"+toDoText+"</li>").appendTo("ul")

	addToDo(toDoText);
});