var backgroundImage
var engine
var world
var snow = []

function preload(){
backgroundImage = loadImage("snow2.jpg")


}
function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create();
  world = engine.world;
 for(var i = 10;i<800;i = i+50){
  snow.push(new Snow(i,50)) 
  
 }
}

function draw() {
  background(backgroundImage); 
   Matter.Engine.update(engine); 
  for(var i = 0;i<snow.length;i++){
     snow[i].display();
   }


}