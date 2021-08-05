
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball;
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)

	ground = new Ground(width/2,670,width,20)
	ground2 = new Ground(1100,600,20,120)
	ground3 = new Ground(1350,600,20,120)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ground.display()
  ground2.display()
  ground3.display()
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



