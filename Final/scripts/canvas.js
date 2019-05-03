
var background = document.createElement("img");
background.src = "images/background.jpg";
var fruit = document.createElement("img");
fruit.src= "images/fruit.png";

var snake = [];
snake[0]= "yes";

var foodx = Math.floor(Math.random()*30+1)*20;
var foody = Math.floor(Math.random()*30+1)*20;

var score = 0;

var xPosition = 20;
var yPosition = 20;

var direction = "right";


$(document).ready(function(){

    setup();


    $(this).keypress(function(event){
        getKey(event);

    });
});


function setup(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  setInterval(draw(),100);


}

function draw(){
  ctx.drawImage(background,0,0);
  for(var i = 0; i <= snake.length; i++){
    ctx.fillStyle = "green";
    ctx.fillRect( xPosition, 20, 20, 20);
  }
  
  ctx.drawImage(fruit,foodx,foody,20,20);

  if(direction == "right"){
    xPosition +=20;
    console.log(xPosition);
  }
  else if(direction == "left"){
    xPosition -= 20;
  }
  else if(direction == "up"){
    yPosition -= 20;
  }
  else{
    yPositon += 20;
  }

}

function getKey(event){
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if(actualLetter == "w"){
        direction = "up";
    }
    if(actualLetter == "s"){
        direction = "down";
    }
    if(actualLetter == "a"){
        direction = "left";
    }
    if(actualLetter == "d"){
        direction = "right";
    }
}
