
var imageArray = new Array();

class Viewfinder{
  constructor(title, source, description, author, year){
    this.title= title;
    this.source = source;
    this.description= description;
    this.author = author;
    this.year = year;
  }

  stringTo(){
    return "Title: " + this.title;
  }

  returnImage(){
    return this.source;

  }

  returnDescription(){
    return "Description: " + this.description;
  }

  returnAuthor(){
    return "Author: " + this.author;
  }

  returnYear(){
    return "Year: " + this.year;
  }

}

function buildArray(){
  var guitarist= new Viewfinder("The Old Guitarist", "images/guitarist.jpg", "Monochromatic blue painting of a man with a guitar", "Picasso", "1903-1904");
  var pipe= new Viewfinder("The treachury of Images", "images/MagrittePipe.jpg", "Painting of a pipe. French script says 'This is not a pipe'", "Magritte", "1928-1929");
  var nighthawks= new Viewfinder("Nighthawks","images/Nighthawks.jpg", "Painting of a diner at night", "Hopper", "1942");
  var skull= new Viewfinder("Skull of a Skeleton with a Burning Cigarette", "images/skull.jpg", "Van Gogh", "1885-1886");
  var hygieia= new Viewfinder("hygieia", "images/hygieia.jpg", "Painting of a woman in gold and red", "Klimt", "1900");

  imageArray.push(guitarist);
  imageArray.push(pipe);
  imageArray.push(nighthawks);
  imageArray.push(skull);
  imageArray.push(hygieia);

}

function randomImage(){
  var randNum = Math.floor(Math.random()*6);
  console.log(imageArray[1]);
  document.getElementById("image").src = imageArray[randNum].returnImage();
  document.getElementById("title").innerHTML = imageArray[randNum].stringTo();
  document.getElementById("author").innerHTML = imageArray[randNum].returnAuthor();
  document.getElementById("description").innerHTML = imageArray[randNum].returnDescription();
  document.getElementById("Year").innerHTML = imageArray[randNum].returnYear();
}
