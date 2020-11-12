const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
  backgroundIMG = loadImage("931977.png")
}
function setup() {
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(480,275);
  b2=new Box(510,275);
  b3=new Box(540,275);
  b4=new Box(570,275);
  b5=new Box(600,275);
  b6=new Box(450,275);
  b7=new Box(630,275);
  b8=new Box(480,235);
  b9=new Box(510,235);
  b10=new Box(540,235);
  b11=new Box(570,235);
  b12=new Box(600,235);
  b13=new Box(510,195);
  b14=new Box(530,195);
  b15=new Box(560,195);
  b16=new Box(530,155);
  b17=new Box(800,100);
  b18=new Box(800,140);
  b19=new Box(830,140);
  b20=new Box(770,140);
  b21=new Box(800,180);
  b22=new Box(830,180);
  b23=new Box(860,180);
  b24=new Box(770,180);
  b25=new Box(740,180);
  ground1=new Ground(500,490,2000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background(backgroundIMG); 
  Engine.update(engine);
  fill(135,206,234);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(254,192,203);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(63,224,208);
  b13.display();
  b14.display();
  b15.display();
  fill(128,128,128);
  b16.display();
  fill(254,192,203);
  b17.display();
  fill(63,224,208);
  b18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
