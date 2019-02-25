
// Array for the back of the cards
var cards = ["image1","image2","image3","image4", "image 5","image6", "image7", "image8", "image9", "image10"];

var blankCard = "images/blankCard";

var actualCard = new Array();



function printCards(){

  //randomizeCards();

  for( var i = 0; i<cards.length; i++){
    document.getElementById(cards[i]).src = blankCard;
  }
}

/*function randomizeCards (){
  var actualCardPath = ["aceOfSpades.PNG","eightOfDiamonds.PNG","kingOfHearts.JPG","tenOfClubs.PNG","twoOfSpades.PNG"];

  var count = [0,0,0,0,0];

  while(actualCard.length < 10){

    var randomNum = math.floor(math.random()* actualCardPath.length);

    if(count[randomNum] < 2){
      actualCard.push(actualImagePath[randomNum]);
      count[randomNum] ++;
    }
  }
}

function flipImage(cardPlace){
  document.getElementById(actualCard[cardPlace]).src = actualCard[cardPlace];
}

*/
