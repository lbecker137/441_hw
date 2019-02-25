
// Array for the back of the cards
var cards = ["image1","image2","image3","image4", "image 5","image6", "image7", "image8", "image9", "image10"];
var blankCard = "images/blankCard.JPG";
var actualCard = new Array();
var player= {"firstname":"","lastName":""}
var cardOne= -1;
var cardTwo= -1;
var attempts = 0;
var pairs = 0;


function printCards(){

  randomizeCards();

  for( var i = 0; i<cards.length; i++){
    document.getElementById(cards[i]).src = blankCard;
  }
}

function randomizeCards (){
  var actualCardPath = ["aceOfSpades.png","eightOfDiamonds.png","kingOfHearts.JPG","tenOfClubs.PNG","twoOfSpades.PNG"];

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


  if(firstNumber >= 0)
  {
      secondNumber = number;
      document.getElementById(cards[number]).src = actualImages[secondNumber];

  }
  else if(firstNumber < 0)
  {
      firstNumber = number;
      document.getElementById(imageNames[firstNumber]).src= actualCard[firstNumber];

  }


  if(actualCard[secondNumber] != actualCard[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      setTimeout(imagesDisappear, 1000);
      attempts ++;
  }

  else if(actualCard[secondNumber] == actualCard[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
  {
      firstNumber = -1;
      secondNumber = -1;
      pairs ++;
  }

  if(pairs==5){
    finish();
  }

}

function imagesDisappear()
{

  console.log(firstNumber);
  document.getElementById(imageNames[firstNumber]).src = blankImagePath;
  document.getElementById(imageNames[secondNumber]).src = blankImagePath;
  firstNumber = -1;
  secondNumber = -1;
}


function addToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value;

  player.firstname = firstName;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "index.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
}

function finish(){
  document.getElementById(attempts);
  document.getElementById(player)
}
