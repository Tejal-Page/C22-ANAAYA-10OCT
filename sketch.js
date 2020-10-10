//CALL ENGINE,WORLD AND BODY FROM MATTER LIBRARY
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//VARIABLES
var engine , world , object;
var ball;
function setup() {
  createCanvas(400,400);
//creating the engine
engine = Engine.create();
//connect the world to the engine
world = engine.world;
//options for the objects
var options = {
  isStatic:true
}
var ballOptions = {
  restitution:1
}
//connecting object to the world
object = Bodies.rectangle(200,350,400,20,options);
ball = Bodies.rectangle(105,100,40,40,ballOptions);
World.add(world,object);
World.add(world,ball);
console.log(object);
}

function draw() {
  background(255,255,255);   
  Engine.update(engine);   
  rectMode(CENTER);
  
  rect(object.position.x,object.position.y,400,20);
  rect(ball.position.x,ball.position.y,40,40);

}
