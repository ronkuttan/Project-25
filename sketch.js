
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,400,70)
    ground1 = new Ground(600,650,1200,10)
	
	dustbin1 = new Dustbin(875,551,0,0) 
	dustbin2 = new Dustbin(785,550,15,190) 
	dustbin3 = new Dustbin(940,550,15,190) 	

	Engine.run(engine);

}


function draw() {
  
  Engine.update(engine);
  background("white");
  
  drawSprites();

  paper1.display();
  ground1.display();
  dustbin1.display();	

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-155})
	}
}


