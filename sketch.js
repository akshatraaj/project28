const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin,dj;
var ground, slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    dustbin = new Box(700,320,70,70);
    dustbin.scale = 1;
    dj = new Bird(100,100);
    slingshot = new Chain(dj.body,{x:200, y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    dustbin.display();
    ground.display();
    dj.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
