var dogSelector = "#dog";
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

function initializeArray()
{
    var moon = new Pics("#dog", "images/coolPic.jpg");
    var cross = new Pics("#dog", "images/sunsetCross.jpg");
    var bird = new Pics("#dog", "images/sunsetBird.jpg");
    
    imageArray.push(moon);
    imageArray.push(cross);
    imageArray.push(bird);

}
$(document).ready(function(){
    console.log(imageArray[0].toString());
    console.log(imageArray[0].theSelector);
    console.log(imageArray[0].theImagePath);

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(imageArray[0].theSelector).attr("src", imageArray[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
          // setInterval(moveSquare, 1000);

       // $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
