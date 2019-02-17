
// Array for the back of the cards
var cards = ["image1","image2","image3","image4", "image 5",
            "image6", "image7", "image8", "image9", "image10"];

var blankCard = "images/blankCard.jpg";

var cardReveal = new Array();



function printCards(){

  randomizeCards();

  for(var i = 0; i < cards.length; i++){
    document.getElementById(cards[i]).src=blankCard;
  }
}

function randomizeCards (cards){
  var actualCardPath
  for(var i=0; i< cards.length; i++){

  }
}
