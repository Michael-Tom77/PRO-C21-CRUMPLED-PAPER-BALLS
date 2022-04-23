
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200, 100, 20);

	ground = new Wall(600, 500, 1200, 10);
	wall1 = new Wall(800, 500, 5, 80);
	wall2 = new Wall(1000, 500, 5, 80);


	fill("blue");
	stroke("white");
	ellipseMode(RADIUS);
	rectMode(CENTER);

	Engine.run(engine);
}

function keyPressed() {
	if (keyDown == UP_ARROW) {
		Matter.Body.applyForce (ball, {x:0, y:0}, {x:85, y:85})
	}
}

function draw() {

	background(0);

	ground.show();
	ball.show();
	wall1.show();
	wall2.show();

	keyPressed();

	Engine.update(engine);
}




