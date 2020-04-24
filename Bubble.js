class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(50,130);
    this.x = random(0, width);
    this.y = random(0, height);
    this.width = radius;
    this.height = radius;
    this.color = "white";
    this.velocityX = random(-1, +1);
    this.velocityY= random(-1, +1);
    this.strokeWeight=2;
    this.strokecolor="yellow"
    this.shape="ellipse";
    this.display = function() {
      stroke(this.strokecolor);
      strokeWeight(this.strokeWeight);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
     this.y = this.y + this.velocityY;
    }
    
  this.display2 = function() {
      stroke(this.strokecolor);
      strokeWeight(this.strokeWeight);
      fill(this.color);
      rect(this.x, this.y, this.width, this.height);
    }
      
 }
}
