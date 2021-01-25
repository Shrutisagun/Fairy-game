var starImg , fairyImg , bgImg;
var fairy , fairy voice;
var star , starBody;

const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
const Body = Matter.body;

function preload()
{
   starImg = loadImage("images/star.png");
   fairyImg = ("images/fairy1.png" , "images/fairy2.png");
   bgImg = loadImage("images/starnight.png");
   fairyVoice =loadSound("sound/JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  
  fairyVoice.play();

  fairy = createSprite(130 , 520);
  fairy.addAnimation("fairyFlying" , fairyImg);
  fairy.scale = 0.25;
  
  star = createSprite(650,30);
  star.addImage(starImg);
  star.scale =0.2;
  
  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5 , isStatic:
    World.add(world ,starBody);

    Engine.run(engine);


  }



}


function draw() {
  background("bgImg");
  
}
