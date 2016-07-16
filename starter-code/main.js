var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var grabElem = document.getElementById('game-board');

var createBoard = function() { 
  for (var i = 0; i <cards.length; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
  grabElem.appendChild(newCard);
  grabElem.appendChild(newCard);
}
}

var isTwoCards = function() {
   cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'queen') {
    this.className = 'flippedqueen';} else {this.className = 'flippedking'};
  if (cardsInPlay.length === 2) {
  isMatch(cardsInPlay);
    cardsInPlay = [];
}
}  

var isMatch = function(cards) {
if (cards[0] === cards[1]) {
	alert("You found a match!");
} else {
	alert("Sorry try again.");
}
}

createBoard();  