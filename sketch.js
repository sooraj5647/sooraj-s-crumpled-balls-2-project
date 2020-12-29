
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball, ballImage, ballSprite;
var binBottom,binLeft,binRight,binImage,binSprite;
var background1;



function preload() {
	ballImage = loadImage('paper.png');
	binImage = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);

	//background1 = createSprite(400,350,800,700);
	//background1.shapeColor = "brown";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Floor(400,690,800,10);

	binRight = new Dustbin(760,665,10,40);
	binBottom = new Dustbin(730,680,50,10);
	binLeft = new Dustbin(700,665,10,40);
	
	ball = new Ball(100,500,10);

	Engine.run(engine);

	ballSprite = createSprite(0,0);
	binSprite = createSprite(730,665);
}


function draw() {
	background(255);

	ballSprite.addImage("ball",ballImage);
	binSprite.addImage("bin",binImage);
  
	ball.position.x = ballSprite.x;
	ball.position.y = ballSprite.y;

	ground.display();

	binRight.display();
	binBottom.display();
	binLeft.display();

	ball.display();

	drawSprites();
 
	// keyPressed();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:14,y:-20});
	}
}

