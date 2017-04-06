function Disco() {

 console.log ("Construye Disco");
  //////////////////////////////////////////
  //externas
  
  this.setup = function() {
    this.v1 = createVector(1, 0);
    this.angle = 0;
     console.log ("Setup Disco");
     console.log ("valor angle = " + this.angle);
  }

  
  this.display = function() {

    push();
    fill(255);
    strokeWeight(0.3);
    translate(width * 0.5, height * 0.5 - 5);
    rotate(this.angle);
    this.pintaDisco(0, 0, 153, 30);
    pop();
  }


  this.update = function() {
    this.updateAngle();
  }

  ////////////////////////////////////
  //internas
  this.updateAngle = function() {
    this.angle = this.angle + 1;
    //if(angle == 2*PI)angle = 0;
    console.log ("updateAngle = " + this.angle);
  }

  this.pintaDisco = function(x, y, radius, npoints) {
    var anglePintaDisco = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += anglePintaDisco) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  

}