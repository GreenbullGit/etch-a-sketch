var gridSize= 16;
var squareSize= (500 / gridSize);
$(document).ready(function(){

	createCol(gridSize);
	resizeSquare();

	$("#container > div").hover(function(){
		$(this).css("background-color", "black");
});

	$("button").click(function(){
		var userSize=prompt("How many boxes do you want in a line?")
		if (userSize != null){
			$("#container").empty();
			gridSize= userSize;
			squareSize=(500 / gridSize);
			createCol(gridSize);
			resizeSquare();
			$("#container > div").hover(function(){
				$(this).css("background-color", "black");
				});

				}

	});

	
});

function createRow(size){
	for(var i=0; i< size; i++){
		$("#container").append("<div> </div>");
	}
}

function createCol(size){
	for (var k=0; k< size; k++){
		createRow(size);
	}
}

function resizeSquare(){
	$("#container > div").css("height", squareSize+"px");
	$("#container > div").css("width", squareSize+"px");

}
