var mainPlane, mainImg;
var enemy, enemy1Img;
var enemy2Img;
var  enemy3Img;
var  enemy4Img;
var  enemy5Img;
var  enemy6Img;
var  enemy7Img;
var  enemy8Img;
var sky, skyImg;
var life, heart1Img;
var life2, heart2Img;
var life3, heart3Img;

//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload(){
mainImg = loadImage("mainShip.png");
enemy1Img = loadImage("enemy1.png");
enemy2Img = loadImage("enemy2.png");
enemy3Img = loadImage("enemy3.png");
enemy4Img = loadImage("enemy4.png");
enemy5Img = loadImage("enemy5.png");
enemy6Img = loadImage("enemy6.png");
enemy7Img = loadImage("enemy7.png");
enemy8Img = loadImage("enemy8.png");
heart1Img = loadImage("heart_1.png");
heart2Img = loadImage("heart_2.png");
heart3Img = loadImage("heart_3.png");
skyImg = loadImage("skyBackground.png");


	
}

function setup() {
	createCanvas(800, 700);

  sky = createSprite(displayWidth/2-600,displayHeight/2-250,20,20)
  sky.addImage(skyImg)
  sky.scale = 4;

  mainPlane = createSprite(350, 630, 50, 50);
  mainPlane.addImage(mainImg)
  mainPlane.scale = 1.3
  //mainPlane.debug = true
  mainPlane.setCollider("rectangle",0,0,300,300)

life1 = createSprite(750,40,50,50)
life1.addImage(heart1Img)
life1.scale = 0.3
life1.visible = false;

life2 = createSprite(720,40,50,50)
life2.addImage(heart2Img)
life2.scale = 0.3
life2.visible = false;

life3 = createSprite(690,40,50,50)
life3.addImage(heart3Img)
life3.scale = 0.3

enemyG = new Group();

//	engine = Engine.create();
//	world = engine.world;

	//Create the Bodies Here.


//	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  createEnemy()

  if(keyDown("UP_ARROW")&& mainPlane.y> 450){
      mainPlane.y = mainPlane.y-10
  
  }
  if(keyDown("DOWN_ARROW")&& mainPlane.y< 700){
   mainPlane.y = mainPlane.y+10
  }
  
  if(keyDown("RIGHT_ARROW")&& mainPlane.x< 800){
    mainPlane.x = mainPlane.x+30
   }
   
   if(keyDown("LEFT_ARROW")&& mainPlane.x> 0){
    mainPlane.x = mainPlane.x-30
   }

   if(enemyG.isTouching(mainPlane)){
    life3.visible = false
    life2.visible = true;
    
    for(var i = 0; i<enemyG.length;i++){
      if(enemyG[i].isTouching(mainPlane)){
        enemyG[i].destroy();
      }
  
    }
  
  }
  
  drawSprites();
 
}

function createEnemy(){
  if (frameCount % 120 == 0) {
  enemy = createSprite(Math.round(random(50, 600),40, 10, 10));
    
   var rand = Math.round(random(1,8)); 
   switch(rand) {
      case 1:enemy.addImage(enemy1Img);
             break;
      case 2:enemy.addImage(enemy2Img); 
             break;
      case 3:enemy.addImage(enemy3Img);   
             break;
      case 4:enemy.addImage(enemy4Img);
             break;
      case 5:enemy.addImage(enemy5Img);   
             break;
      case 6:enemy.addImage(enemy6Img);
            break;
      case 7:enemy.addImage(enemy7Img);   
             break;
      case 8:enemy.addImage(enemy8Img);
              break;
      default: break; 
   }

   enemy.velocityY=12 ;
    enemy.scale=1.3;
    enemy.lifetime=200;
    enemyG.add(enemy);

  }
} 
