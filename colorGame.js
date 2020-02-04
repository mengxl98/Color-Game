var mode = 6;
var colors;
var correctcolor;
var squares = document.querySelectorAll(".square");
var rgbtext = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var h1background = document.querySelector("h1");

init();


function init(){

	resetColor();
	addEventToSquare();
	addEventToReset();
	addEventToEasy();
	addEventToHard();
}

function addEventToSquare(){
		for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			console.log(clickedColor,correctcolor);
			if(clickedColor === correctcolor){
				message.textContent = "Correct!";
				changeColor();
				h1background.style.backgroundColor=correctcolor;
				reset.textContent = "Play again?";
			} else {
				message.textContent = "Try Again!";
				this.style.background = "#232323";
			}
		});
	}
}


function addEventToReset(){
		reset.addEventListener("click", function(){
		resetColor();
		reset.textContent = "new colors";
		for (var i = squares.length - 1; i >= 0; i--) {
			squares[i].style.backgroundColor = colors[i];
		};
	});
}

function addEventToEasy(){
		easybtn.addEventListener("click", function(){
		this.classList.add("selected");
		hardbtn.classList.remove("selected");
		mode = 3;
		resetColor();
		for (var i = squares.length - 1; i >= 0; i--) {
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		};

	});
}

function addEventToHard(){
		hardbtn.addEventListener("click", function(){
		this.classList.add("selected");
		easybtn.classList.remove("selected");
		mode = 6;
		resetColor();
		for (var i = squares.length - 1; i >= 0; i--) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		};
	});
}

function resetColor(){
	colors = randomColors(mode);
	correctcolor = pickColor();
	rgbtext.textContent = correctcolor;
	h1background.style.backgroundColor = "steelblue";
}

function changeColor(){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = correctcolor;
	}
}

function randomColors(num){
	var arr = [];
	for (var i = num; i > 0; i--) {
		arr.push(getRandomRGB());
	}
	return arr;
}

function getRandomRGB(){
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);

	return "rgb("+r + ", " + g + ", "+ b + ")";
}

function pickColor(){
	var index = Math.floor(Math.random() *colors.length);
	return colors[index];
}