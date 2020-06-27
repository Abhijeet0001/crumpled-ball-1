var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ball = new Paper()
ground = new Ground(400,680,800,40)
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

side1 = new Ground(600,630,10,60)
side2 = new Ground(790,630,10,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display()
  ground.display()
  side1.display()
  side2.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:420,y:500})
	}
}


