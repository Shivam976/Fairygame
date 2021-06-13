const Engine =Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var fairy,star,fairyImage,starImage
var bgImage,bg;

function preload()
{
   //preload the images here
   fairyImage=loadImage("fairy1.png")
   starImage=loadImage("star.png")
   bgImage=loadImage("starnight.png")
}

function setup() {
  createCanvas(800, 750);
  bg=createSprite(width/2,height/2)
  bg.addImage(bgImage)

  fairy=createSprite(200,400)
  fairy.addImage(fairyImage)
  fairy.scale=0.2

  star=createSprite(600,0)
  star.addImage(starImage)
  star.scale=0.3
  star.velocityY=3

  engine = Engine.create();
  world = engine.world
  starBody=Bodies.rectangle(600,0,50,50)
  World.add(world,starBody);
  
  
}


function draw() {
  background("black");
Engine.update(engine)
star.x = starBody.position.x
star.y = starBody.position.y

if(starBody.position.y > 400){
  Body.setStatic(starBody, true)
}
  
drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 100
  }

  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 100
  }
}