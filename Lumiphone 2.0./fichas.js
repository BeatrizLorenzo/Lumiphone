var v2;

var piano;
var pianoDo;
var pianoMi;
var pianoSol;

function preload (){
  piano = loadSound ('sonido/pianoDo.mp3');
  pianoDo = loadSound ('sonido/pianoDo2.mp3');
  pianoMi = loadSound ('sonido/pianoMi.mp3');
  pianoSol = loadSound ('sonido/pianoSol.mp3');
}

function Ficha(x,y) {
  this.x = x;
  this.y = y;
  this.r = 17;
  v2 = createVector (this.x,this.y);
 
  this.move = function(){
      var d = dist (mouseX, mouseY, this.x, this.y);
      if (mouseIsPressed && d < this.r) {
      this.x = mouseX ;
      this.y = mouseY ;
      //console.log ("x: " + this.x);
      //console.log ("y: " + this.y);
    }
   } 
   this.mouseReleased = function(){
    var f = dist (this.x,this.y,v1.x,v1.y);
    if (f < rd) {
      b = true;
      print ("True");
    }
    else {
      b = false;
    }
  }
  this.rotate = function(){
    if (b === true){
      distance = v1.dist(v2);
      console.log (distance);
      
      push();
      translate(v1.x,v1.y);
      rotate(frameCount/50.0);
      ficha = ellipse (distance/2,distance/2,this.r, this.r);
      pop();
    }
  }
  this.display = function() {
    noStroke();
    fill(42,46,102);
    ellipse(this.x, this.y, this.r, this.r);
  }
  this.playSound1 = function() {
    
    var d = dist (this.x, this.y, 386, 242);
      if (d < 5) {
        piano.play();
      }
  } 
  this.playSound2 = function() {
    var d = dist (this.x, this.y, 413, 225);
      if (d < 5) {
        pianoDo.play();
      }
  }
  this.playSound3 = function() {
    var d = dist (this.x, this.y, 434, 210);
      if (d < 5) {
        pianoMi.play();
      }
  }
  this.playSound4 = function() {
    var d = dist (this.x, this.y, 450, 196);
      if (d < 5) {
        pianoSol.play();
      }
  }
}