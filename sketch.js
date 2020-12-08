const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var paperObject, groundObject, dustbinObject;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	//Create the Bodies Here.

	//Creating paper object getting thrown in dustbin
	paperObject = new Paper(200, 300, 70);

	//Creating the dustbin
	dustbinObject = new Dustbin(1200, 525)

	//Creating the ground object
	groundObject = new Ground(width/2, 650, width, 20);

	//A renderer which will create a duplicate and is helpful with debugging/testing
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
	background(255);

	groundObject.display();

	paperObject.display();
	  
	dustbinObject.display();
  
  	drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130, y:-180});
	}
}