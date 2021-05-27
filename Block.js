class Block{
  constructor(x, y, width, height,fill) {
      var options = {
         isStatic :false,
          restitution :0.4,
          friction :0.1
          
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255
    }
    display(){
      
      if((this.body.speed)<3)
{
  var angle = this.body.angle;
      var pos= this.body.position;
      push();
  translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2)
      rect(0,0,this.width, this.height);
  pop();
}
else{
  //do nothing
  World.remove(world,this.body);
  push();
  this.Visibility = this.Visibility-5;
  tint(255,this.Visibility);
  rect(999,999,this.width, this.height);
  pop();
}
      
      
      
      
      
      
    }
}