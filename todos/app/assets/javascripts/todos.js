$("<ul class='todos'></ul>").appendTo("body");
var counter = 0;
// var toDoText; 

var addToDo = function(toDoText){
	$("<li class='todo' id='"+counter+"'>"+toDoText+"</li>").appendTo("ul")
	$("<input id='complete"+counter+"' type='checkbox'></input>").appendTo("li#"+counter);
	$("<button>"+'x'+"</input>").appendTo("li#"+counter);

	var checkBox = $("input#complete"+counter.toString());
	//strikethrough

	checkBox.on("click", function(e) {     
		$(this).parent().toggleClass("complete")   
	})

	counter++;
};

var formField = document.querySelector("form");
formField.addEventListener("submit", function(event){
	event.preventDefault();
	var toDoText = $("input").val();
	// var toDo = $("<li class='todo'>"+toDoText+"</li>").appendTo("ul")
	addToDo(toDoText);
	$("input").val("");

	//json part
	$.post("/todos", {task: toDoText})
});


var allToDos = function(){$.getJSON("/"), function(response){
	for(var i = 0; i < response.length; i++){
		$("<li>"+addToDo(response[i])+"</li>").appendTo("body")
	}
	};
};

