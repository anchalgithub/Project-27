
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);
	bob1 = new Bob(70,200);
	bob2 = new Bob(80,200);
	bob3 = new Bob(90,200);
	bob4 = new Bob(100,200);
	bob5 = new Bob(100,200);
	bobDiameter=40;

	//the starting position of the bobs.
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	rope = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope = new Rope(bob2.body,roof.body,-bobDiameter*2,0)
	rope = new Rope(bob3.body,roof.body,-bobDiameter*2,0)
	rope = new Rope(bob4.body,roof.body,-bobDiameter*2,0)
	rope = new Rope(bob5.body,roof.body,-bobDiameter*2,0)

	//making sure the bob actually works and attaching the bob's weight to the object.
	constraint1={
		bodyA:bob1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}
	constraint2={
		bodyA:bob2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}
	constraint3={
		bodyA:bob3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}
	}
	constraint4={
		bodyA:bob4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	
	}
	constraint5={
		bodyA:bob5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	//connecting the pendulum and adding it to a physical world
	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
 
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45})
	}
	
	}

	//giving a restriction to the bob, so it can't go too up.
	function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}





