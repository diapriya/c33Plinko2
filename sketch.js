 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;
var gameState = "PLAY";

var particle;
var turn = 0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,5);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {

  console.log(1);
  background("black");
  Engine.update(engine);
 
 textSize(20)
 text("Score : "+score,20,30);


 if(gameState === "END"){
    
  textSize(50)
  fill("violet");
  text("GAME OVER!!", 200, 250);

 }


 
 textSize(30);
 fill("white");
 text("500",20,700);
 text("500",100,700);
 text("500",180,700);
 text("500",260,700);
 text("100",340,700);
 text("100",420,700);
 text("100",500,700);
 text("200",580,700);
 text("200",660,700);
 text("200",740,700);

  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(frameCount % 30 === 0){
       particles.push(new Particle(10,10,10));
    }



 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 

   if (particle != null){
   
      particle.display();

      if( particle.body.position.y > 700 && particle.body.position.x < 320){
    
        score=score + 500;
        particle=null;
        
      }

      if (particle != null){

        if( particle.body.position.y > 700 && ( particle.body.position.x > 320 && particle.body.position.x < 560) ){
    
          score=score + 100;
          particle=null;
          
        }

      }

      if (particle != null){

        if( particle.body.position.y > 700 &&  particle.body.position.x > 560 ){
    
          score=score + 200;
          particle=null;
          
        }

      }



  }
 

}

function mousePressed(){

  turn = turn + 1;

  if( turn >= 5){
     gameState = "END";
  } 
  
  if(gameState === "END"){
  
  }else{
 
    particle=new Particle(mouseX,10,10,10); 
 
  }


}









