var fondo;
var img;
var fichas = [];
var miDisco;

function setup() {
  fondo = loadImage("img/fondo.png");
  img = loadImage("img/superior.png");
  createCanvas(640, 480);
  miDisco = new Disco();
  miDisco.setup();


  //Fichas
  for (var i = 0; i < 10; i++) {
    var x = 103;
    var y = i * 32 + 90;
    fichas.push(new Ficha(x, y));
  }
}


function draw() {
  background(255);
  //Rect Fondo
  fill(242, 221, 187);
  stroke(129, 154, 152);
  strokeWeight(4);
  rect(20, 20, 600, 440, 20, 40, 20, 5);
  //img fondo  
  image(fondo, 9, -1);
  //Disco  
  miDisco.update();
  miDisco.display();
  //img Aguja  
  image(img, 8, 0);
  //Fichas
  for (var i = 0; i < fichas.length; i++) {
    fichas[i].move();
    //fichas[i].playSound1();
    //fichas[i].playSound2();
    //fichas[i].playSound3();
    //fichas[i].playSound4();
    //fichas[i].mouseReleased();
    //fichas[i].rotate();
    fichas[i].display();


  }

}

