
var background = document.createElement("img");
background.src = "images/background.jpg";
var fruit = document.createElement("img");
fruit.src= "images/fruit.png";

var snake = new Array;

var foodX = Math.floor(Math.random()*30+1)*20;
var foodY = Math.floor(Math.random()*30+1)*20;

var score = 0;
var checkEnd = 1;

var xPosition = 20;
var yPosition = 20;

var direction = "right";

// **** begin class

class Square{

    constructor(xCoord,yCoord,color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        //this.objectHeight = objectHeight;
        //this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    /*get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    */
    get mainColor()
    {
        return this.color;
    }
}

// **** end class

$(document).ready(function(){

    setup();


    $(this).keypress(function(event){
        getKey(event);

    });
});


function setup(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  snake.push(new Square(20,20,"green"));

  if(checkEnd==1){
    setInterval(draw,100);
  }

  if(checkEnd==0){
    endGame();
  }

}

// fruit
function checkFruit(){
  if(snake[0].x+21>= foodX+1 && snake[0].y+21 >= foodY+1 && snake[0].x <= foodX+19 && snake[0].y <= foodY+19){
    foodX = Math.floor(Math.random()*30+1)*20;
    foodY = Math.floor(Math.random()*30+1)*20;
    score++;
    if(direction == "up"){
      snake.push(new Square(snake[0].x, snake[0].y + snake.length*20, "black"));
    }

  }
}

function draw(){
  ctx.drawImage(background,0,0);
  for(var i = 0; i <= snake.length; i++){
    ctx.fillStyle = "green";
    ctx.fillRect( snake[i].x, snake[i].y, 20, 20);
  }

  ctx.drawImage(fruit,foodX,foodY,20,20);

  if(direction == "right"){
    for (var i = 1; i<= snake.length; i++){
      snake[i].x -= 20;
    }
    //console.log(xPosition);
  }
  else if(direction == "left"){
    snake[0].x -= 20;
  }
  else if(direction == "up"){
    snake[0].y -= 20;
  }
  else{
    snake[0].y += 20;
  }
  checkFruit();

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
