const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;  

    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(400,300,200,20);
    ground3 = new Ground(700,300,200,20);

    block1 = new Block(330,235,30,30)

    

}

function draw(){
    background(0);
    Engine.update(engine);
    
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();    
    block1.display();
}
