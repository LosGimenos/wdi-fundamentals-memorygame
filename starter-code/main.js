var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var grabElem = document.getElementById('game-board');


var createBoard = function(x) {
	for (var i = 1; i <= x; i++) {
	var newCard = document.createElement('div');
	newCard.setAttribute('class', 'card');
	grabElem.appendChild(newCard);
}
};


//var x = cardOne;
//var y = cardTwo;
//if (x === y) {
	//alert("You found a match!")
//} else {
	//alert("Sorry try again.")
//}