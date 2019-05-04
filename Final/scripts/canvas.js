
var background = document.createElement("img");
background.src = "images/background.jpg";
var fruit = document.createElement("img");
fruit.src= "images/fruit.png";
var endBackground = document.createElement("img");
endBackground.src="images/endbg.jpg"

var blob = new Array;

var foodX = Math.floor(Math.random()*30+1)*20;
var foodY = Math.floor(Math.random()*30+1)*20;

var score = 0;
var game = setInterval(draw,100);

var xPosition = 20;
var yPosition = 20;

var direction = "right";

// **** begin class

class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
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

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
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

  blob.push(new Square(20,20,20,20,"green"));


}

// fruit
function checkFruit(){
  var num = Math.floor(Math.random()*20);
  for(var i = 0; i< blob.length; i++){
    if(blob[i].x+21>= foodX+1 && blob[i].y+21 >= foodY+1 && blob[i].x <= foodX+19 && blob[i].y <= foodY+19){
      foodX = Math.floor(Math.random()*30+1)*20;
      foodY = Math.floor(Math.random()*30+1)*20;
      score++;
      if(direction=="up"){
        blob.push(new Square(blob[0].xCoord, blob[0].yCoord + num*score, 20, 20, "grey"));
      }
      if(direction=="down"){
        blob.push(new Square(blob[0].xCoord, blob[0].yCoord - num*score, 20, 20, "purple"));
      }
      if(direction=="left"){
        blob.push(new Square(blob[0].xCoord- num*score, blob[0].yCoord, 20, 20, "pink"));
      }
      if(direction=="right"){
        blob.push(new Square(blob[0].xCoord+num*score, blob[0].yCoord, 20, 20, "blue"));
      }
      console.log(blob.length)
    }
  }
}

function checkEdges(){
  for(var i = 0; i<blob.length; i++){
    if(blob[i].xCoord <0 || blob[i].xCoord +20 > 800 || blob[i].yCoord<0 || blob[i].yCoord>600){
      endGame();
    }
  }
}

function endGame(){
  clearInterval(game);

  ctx.drawImage(endBackground,0,0);

  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Game Over", 250, 150);
  ctx.font= "20px Arial";
  ctx.fillText("score: " + score, 320, 200);
}

function draw(){
  ctx.drawImage(background,0,0);
  for(var i = 0; i <= blob.length; i++){
    for(var i = 0; i< blob.length; i++){
      ctx.fillStyle = blob[i].color;
      ctx.fillRect( blob[i].xCoord, blob[i].yCoord, 20, 20);
    }
  }

  ctx.drawImage(fruit,foodX,foodY,20,20);

  if(direction == "right"){
    for(var i = 0; i<= blob.length-1; i++){
      blob[i].xCoord += 20;
    }
  }
  else if(direction == "left"){
    for(var i = 0; i<=blob.length-1; i++){
      blob[i].xCoord -= 20;
    }
  }

  else if(direction == "up"){
    for(var i= 0; i<= blob.length-1; i++){
        blob[i].yCoord -= 20;
    }
  }
  else{
    for( var i=0; i<= blob.length-1; i++){
      blob[i].yCoord += 20;
    }
  }
  checkFruit();
  checkEdges();

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
