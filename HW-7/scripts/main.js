var imageArray = new Array();

class imageToView{
  constructor(title, source, description, author, year){
    this.title= title;
    this.scource = source;
    this.description= description;
    this.author= author;
    this.year = year;
  }

  stringTo(){
    return "Title: " + this.title;
  }

  returnImage(){
    return this.image;

  }

  returnDescriprion(){
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
  var guitarist= new imageToView("The Old Guitarist", "images/guitarist.jpg", "Monochromatic blue painting of a man with a guitar", "Picasso", "1903-1904");
  var pipe= new imageToView("The treachury of Images", "images/MagrittePipe.jpg", "Painting of a pipe. French script says 'This is not a pipe'", "Magritte", "1928-1929");
  var nighthawks= new imageToView("Nighthawks","images/Nighthawks.jpg", "Painting of a diner at night", "Hopper", "1942");
  var skull= new imageToView("Skull of a Skeleton with a Burning Cigarette", "images/skull.jpg", "Van Gogh", "1885-1886");
  var hygieia= new imageToView("hygieia", "images/hygieia.jpg", "Painting of a woman in gold and red", "Klimt", "1900");

  imageArray.push(guitarist);
  imageArray.push(pipe);
  imageArray.push(nighthawks);
  imageArray.push(skull);
  imageArray.push(hygieia);

}

function randomImage(){
  var randomNum = math.random(0,6);
  //document.getelementById("Title").innerHTML = imageArray[randomNum].toString(randomNum);
  //document.getelementById(imageArray[randomNum]).src
  document.getElementById("title").innerHTML = imageArray[1].stringTo();

}
