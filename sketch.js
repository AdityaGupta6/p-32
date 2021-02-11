const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body
const Render=Matter.Render
var ground
var stone1,stone2,stone3,stone4,stone5
var stoneImg
var gems
var boy
var bgImg
var line1,line2,line3,line4,line5;
var score=0


function preload(){
  bg=loadImage("bg.png")
  stoneImg=loadImage("stone.png")

}



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(200,400,400,10)
 
 
 boy=new Boy(50,370,40)

gems=new Gems(200,100,15)

}

function draw() {
  background(bg);  
  Engine.update(engine);
  textSize(20)
  text ("Score :"+score,10,30)
  stone1 = createSprite(50, 50, 10, 10)
  stone1.addImage(stoneImg);
  stone1.scale = 0.05;
  stone2 = createSprite(100, 100, 10, 10)
  stone2.addImage(stoneImg);
  stone2.scale = 0.05;
  stone3 = createSprite(150, 150, 10, 10)
  stone3.addImage(stoneImg);
  stone3.scale = 0.05;
  stone4 = createSprite(200, 50, 10, 10)
  stone4.addImage(stoneImg);
  stone4.scale = 0.05;
  stone5 = createSprite(300, 50, 10, 10)
  stone5.addImage(stoneImg);
  stone5.scale = 0.05;
  if (mousePressedOver(stone1)) {
    line1=new Line(boy.body,{x:50, y:50})
    line1.display()
  }
  if (mousePressedOver(stone2)) {
    line2=new Line(boy.body,{x:100, y:100})
    line2.display()
  }
  
  if (mousePressedOver(stone3)) {
    line3=new Line(boy.body,{x:150, y:150})
    line3.display()
  }
  
  if (mousePressedOver(stone4)) {
    line4=new Line(boy.body,{x:200, y:50})
    line4.display()
    
  }
  if (mousePressedOver(stone5)) {
    line5=new Line(boy.body,{x:300, y:50})
    line5.display()
    // line5.fly()
  }

  collide(boy,gems)
  
  gems.display()
  ground.display()
  boy.display()
  
  
  drawSprites();
}

  function collide(boy,gems) {
    collid=Matter.SAT.collides(boy.body,gems.body).collided;
    if (collid==true) {
      score++   
     // Matter.Body.setPosition(gems.body,{x:400,y:500})

    }
  } 
  

  // function collide(boy,gems){
  //   position2=gems.body.position
  //   position1=boy.body.position
  //   var distance =dist(position2.x,position2.y,position1.x,position1.y)
  //   if(distance<=gems.r+boy.r){
  //      score++  
  //      Matter.Body.setPosition(gems.body, {x:500,y:200}) 
  //     return true
  //   }
  //   }
    