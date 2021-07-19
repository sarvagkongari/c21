const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function setup() {
 createCanvas(800, 700);
 var balls_option={
	 isStatic:false,
	 restitution:0.2,
	 friction:0,
	 density:1.3
	}

 engine = Engine.create();
 world = engine.world;

 //Create the Bodies Here.


 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  
  drawSprites();
 
}



