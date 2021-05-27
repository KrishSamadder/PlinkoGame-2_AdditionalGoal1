const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var ground;

var particles=[];
var plinkos = [];
var divisions = [];

var particle;

var count = 0;

var PLAY=1;
var END=0;
var gameState = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create(); 
  world = engine.world; 

  for(var k = 0; k <= width; k = k + 47){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight-20));
  }
        
  for (var j = 40; j <=width; j=j+50)
  {
  plinkos.push(new Plinko (j, 75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j, 175)) ;
  }
  for (var j = 40; j <=width; j=j+50)
  {
  plinkos.push(new Plinko(j, 275)) ;
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j, 375)) ;
  }

  ground = new Ground(240, 790, 480, 10);
}


function draw() {
  background(0);  
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
    divisions [k].display ();
    }
    
  for (var h = 0; h<plinkos.length; h++) {
    plinkos [h].display();
  }
  

  if(gameState===PLAY){
  for (var j = 0; j < particles.length; j++) {
    particles [j].display() ;
  }

  ground.display();
  }
  


  textSize(20);
  text("Score: " + count, 30, 30);

  text("500", 10, 550);
  text("500", 55, 550);
  text("500", 100, 550);
  text("500", 148, 550);
  text("100", 193, 550);
  text("100", 240, 550);
  text("100", 290, 550);
  text("200", 335, 550);  
  text("200", 382, 550);
  text("200", 430, 550);
  }

  function mousePressed(){
    gameState=1;
    particles.push(new Particle(random (width/2-10, width/2+10), 10, 10));
    if(gameState===END){
      particle=new Particle(mouseX, 10, 10, 10);
    }
  }