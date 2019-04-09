
class Square{
  constructor(x,y,color,width,height){
    this.x= x;
    this.y= y;
    this.color= color;
    this.width= width;
    this.height= height;
  }

    draw(){
      ctx.fillstyle = this.color;
      ctx.fillRect(this.x,this.y,this.width,this.height);
    }

}

var userSqare = new Square(20,20, "#66329F",25,25);
var otherSquare= new Square (20,20,"#3770613",25,25);

var canvas = getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var ctx2= canvas.getContext("2d");

var xMove= 20;
var yMove= 20;

function PlayGame(){
  setInterval(update, 1000/60);

  moveSquare();
  userMove();
  checkCollide();
}

function moveSquare(){
  if(otherSquare.x + 19 >= 800 || otherSquare.x -19 <= 0){
    xMove *= -1;
    otherSquare.draw();
  }
  if(otherSquare.y + 19 >= 600 || otherSquare.y -19 <=0){
    yMove *= -1;
  }

  otherSquare.x += xMove;
  otherSquare.x += yMove;

}

function userMove(){
  $(document).ready(function(){
    $(this).keypress(function(event){
      getKey(event);
    });
  }};

  function getKey(event){
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w"){
      userSquare.y += 20;
    }
    else if (actualLetter == "s"){
      userSquare.y -= 20;
    }
    else if (actualLetter == "d"){
      userSquare.x += 20;
    }
    else if(actualLetter == "a"){
      userSquare.x -=20;
    }
  }
}

function checkCollide(){
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
