const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon,poImg;

function preload(){
poImg = loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //line one
    ground1=new Ground(384,299,300,20);
    ground3=new Ground(600,389,1200,20);
    block1 = new Block(280,265,30,40);  
    block2 = new Block(310,265,30,40);
    block3 = new Block(340,265,30,40);
    block4 = new Block(370,265,30,40);
    block5 = new Block(400,265,30,40);
    block6 = new Block(430,265,30,40);
    block7 = new Block(460,265,30,40);
    block8 = new Block(490,265,30,40);
    //line two
    block9 = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);
    //line three
    block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //line four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //line five
  block21 = new Block(385,115,30,40);
//line one
 ground2=new Ground(697,252,200,20); 
blocks1 = new Block(640,225,30,40);
  blocks2 = new Block(670,225,30,40);
  blocks3 = new Block(700,225,30,40);
  blocks4 = new Block(730,225,30,40);
  blocks5 = new Block(760,225,30,40);
  //line two
  blocks6 = new Block(670,185,30,40);
  blocks7 = new Block(700,185,30,40);
  blocks8 = new Block(730,185,30,40);
  //line three
  blocks9 = new Block(700,145,30,40);

    polygon = Bodies.circle(100,200,20);
    World.add(world,polygon);

    SlingShot = new SlingShot(this.polygon,{x:100, y:200});

}


function draw(){
background(0);
textSize(20);
fill("white");
text("Press Space to get a second chance",640,300);
Engine.update(engine);
ground1.display();
ground2.display();
ground3.display();
SlingShot.display();
stroke("white")
fill("yellow")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
fill("blue")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
fill(144,238,144)
block15.display();
block16.display();
block17.display();
block18.display();
fill("pink")
block19.display();
block20.display();
fill("orange")
block21.display();
fill("yellow");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("blue");
blocks6.display();
blocks7.display();
blocks8.display();
fill(144,238,144);
blocks9.display();
imageMode(CENTER);
image(poImg,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
  SlingShot.attach(this.polygon);
  
  }
  }
