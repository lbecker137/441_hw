var imageSelector = "#silhouette";
var imageArray = new Array();

class Pics{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

class Square{
  constuctor(width, height, color){
    this.width= width;
    this.height= height;
    this.color= color;
  }
}

function initializeArray()
{
    var moon = new Pics("#silhouette", "images/coolPic.jpg");
    var cross = new Pics("#silhouette", "images/sunsetCross.jpg");
    var bird = new Pics("#silhouette", "images/sunsetBird.jpg");

    imageArray.push(moon);
    imageArray.push(cross);
    imageArray.push(bird);
}

$(document).ready(function(){

    $("button").click(function(){

        $(".stuff").fadeOut();
        $("#third").toggle();

        setInterval(moveSquare, 1000);

        //$(imageArray[0].theSelector).fadeOut().fadeIn();
        $(imageArray[randomNum()].theSelector).attr("src", imageArray[randomNum()].theImagePath);

    });

});

function randomNum(){
  var num = Math.floor(Math.random()*3);
  return num;
}

function moveSquare()
{
    var inVeiw =1;
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
    if(randomNum()==2 && inVeiw ==1){
      $("#square").fadeOut();
      inVeiw = 2;
    }
    if(randomNum()==1 && inVeiw ==2){
      $("#square").fadeIn();
      inView = 1;
    }
}
