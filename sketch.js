//Create variables here
var GameState = 0;
var Goku,GokuImg,GokuImg2,GokuImg3,GokuImg4;
var Enemy,EnemyImg,EnemyIMg2,EnemyImg3,EnemyImg4,EnemyGroup;
var Restart,RestartImg;
var GameOver,GamerOverImg;
var PowerBall,PowerBallImg;
var Dragonball,DragonballImg,DragonballGroup,Dragonball1,DragonballGroup2;
var Img,Imgimage;
var BAckground,BAckgroundImg;
var Mypower,MypowerImg;
var Ground;
var Direction = "MOVE"
var score = 0
var Point = 0
var health = 3
var PlayButton,PlayButtonImg,JumpButton,JumpButtonImg,FireButton,FireButtonImg;
var Leftarrow,LeftarrowImg,Rightarrow,RightarrowImg;
var Health , HealthImg,HealthImg2;
var startsound,hurtsound,happysound,angrysound
var touche;


function preload()
{
  //load images here
  GokuImg = loadImage("23-237025_goku-pixel-art-dragon-ball-z-goku-clipart.png")
  GokuImg4 = loadImage("23-237025_goku-pixel-art-dragon-ball-z-gokut.png")
  BAckgroundImg = loadImage("Background.png")
  EnemyImg = loadImage("538a6ab6182a45cfbde28a2bcaeddcd8.png")
  EnemyIMg2 = loadImage("images.png")
  EnemyImg3 = loadImage("8.png")
  EnemyImg4 = loadImage("imags.png")
  RestartImg = loadImage("555-5555165_restart-button-being-more-experienced-team-leaders-so.png")
  PowerBallImg = loadImage("dragon-ball.png")
  GamerOverImg = loadImage("gameover.png")
  DragonballImg = loadImage("hakai-energy-energy-of-destruction-illustration-of-pink-ball-png-clipart.png")
  Imgimage = loadImage("download.png")
  MypowerImg = loadImage("pngtree-red-heart-icon-isolated-png-image_1726594.png")
  GokuImg2 = loadImage("468-4687320_goku-super-saiyan-pixel-art-hd-png-download.png")
  GokuImg3 = loadImage("468-4687320_goku-super-saiyan-pixel-art-hd-png-download2.png")
  PlayButtonImg = loadImage("d.png")
  JumpButtonImg = loadImage("Untitled.png")
  FireButtonImg = loadImage("led.png")
  LeftarrowImg= loadImage("Untitld.png")
  RightarrowImg = loadImage("ntitled.png")
  HealthImg = loadImage("tled.png")
  HealthImg2 = loadImage("tl.png")
  startsound = loadSound("e317f89d-97cf-42c8-95b7-39e8d7c831b6.mp3")
  happysound = loadSound("3fc73aec-8927-4e19-940f-2015b0f613b9.mp3")
  angrysound = loadSound("094f845d-b08c-4eec-a77a-d4f83c0694e5.mp3")
  hurtsound = loadSound("78277194-11c8-4ed2-846e-e51cf76b2505.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  BAckground = createSprite(450,300,20,20)
  BAckground.addImage("back",BAckgroundImg)
  BAckground.scale = 2
  BAckground.visible = false;
  BAckground.velocityX = -6

  Ground = createSprite(windowWidth/2,windowHeight-100,windowWidth+100,10)
  Ground.shapeColor = "green"
  Ground.visible = false;
 Goku = createSprite(450,Ground.y-12,20,20)
 Goku.addImage("Gokurightwalk",GokuImg2);
 Goku.addImage("Gokuleftwalk",GokuImg3);
  Goku.addImage("Gokusleft",GokuImg4)
  Goku.addImage("Gokusright",GokuImg)


 Goku.scale = 0.3;
 Goku.visible = false;

 Img = createSprite(windowWidth/1.9,windowHeight/3.1,20,20)
 Img.addImage("image",Imgimage)
 Img.scale = 0.5
 Mypower = createSprite(50,50,20,20)
 Mypower.addImage("Power",MypowerImg)
 Mypower.scale = 0.1;
 

 invisibleGround = createSprite(windowWidth/2,windowHeight-100,windowWidth,10);
 invisibleGround.visible = false;

 gameOver = createSprite(windowWidth/2,windowHeight/2);
 restart = createSprite(windowWidth/2,windowHeight/2);

 gameOver.addImage(GamerOverImg);
 gameOver.scale = 0.3;

 restart.addImage(RestartImg);
 restart.scale = 0.18;

 gameOver.visible = false;
 restart.visible = false;

 Goku.setCollider("circle",40,25,200)
 
 PlayButton = createSprite(windowWidth/2,windowHeight/2)
 PlayButton.addImage("PLayButton",PlayButtonImg)
 PlayButton.visible = false

 
 JumpButton = createSprite(windowWidth/1.2,windowHeight/1.4)
 JumpButton.addImage("Jump",JumpButtonImg)
 JumpButton.visible = false

 FireButton = createSprite(windowWidth/1.1,windowHeight/2)
 FireButton.addImage("Fire",FireButtonImg)
 FireButton.scale = 0.8
 FireButton.visible = false

 Rightarrow = createSprite(windowWidth/6,windowHeight/1.4)
 Rightarrow.addImage("Arrow",RightarrowImg)
 Rightarrow.visible = false

 Leftarrow = createSprite(windowWidth/12,windowHeight/1.4)
 Leftarrow.addImage("ARROW",LeftarrowImg)
 Leftarrow.visible = false

 PowerBallGroup = new Group()
 DragonballGroup = new Group();
 DragonballGroup2 = new Group();
 EnemyGroup   = new Group()

}


function draw() {  
  background("white");
  let touche = touches.length + ' touches';





  BAckground.velocityX = -6
      if (BAckground.x < 0){
        BAckground.x = BAckground.width/2;
      }
      Goku.collide(invisibleGround);


 if(Goku.x<0){
   Goku.x = windowWidth
 }

 if(Goku.x>windowWidth){
  Goku.x = 0
}



  if (GameState === 0){
    fill("black")
    textSize(20)
    text("Before you start the game a very important details for you",windowWidth/5,windowHeight/7)
    text("To start the game press e, to throw power ball press q , to jump press space",windowWidth/5,windowHeight/5.5)
    text("To go Right press Right Arrow, and to go Left press Left Arrow",windowWidth/5,windowHeight/4.7)
    text("To Throw Energy Ball reach take 10 Dragon ball",windowWidth/5,windowHeight/4)
    text("You have only 3 lives",windowWidth/5,windowHeight/3.5)
    textSize(30)
    text("Welcome to ",windowWidth/5,windowHeight/3)
     PlayButton.visible = true;



    if (mousePressedOver(PlayButton) || touche>0 ) {
      GameState = 1
      touche = []
      startsound.play()
    }
  }


 if (GameState === 1){
  PlayButton.visible = false;
  BAckground.visible = true;
  Goku.visible = true; 
  Img.visible = false;
  Ground.visible = true;
  JumpButton.visible = true;
  Rightarrow.visible = true;
  Leftarrow.visible = true;


 
 rotate(PI/2)

  
 
 


  if(Point>9){
    FireButton.visible = true;
    if (mousePressedOver(FireButton) || keyDown("e") && Direction === "RIGHT") {
      createBall();
      
    }else if(mousePressedOver(FireButton) || keyDown("e") && Direction === "LEFT"){
      createBall2();
    }
  }
  if(Point>9){ 
    if(mousePressedOver(JumpButton) || keyDown("space") && Goku.y >= Ground.y-100 ) {
      Goku.velocityY = -25;
      
      }
  
      Goku.velocityY = Goku.velocityY + 0.9
     
  }
  else
  {
    if(mousePressedOver(JumpButton) || keyDown("space") && Goku.y > Ground.y-100 ) {
      Goku.velocityY = -23;
     
      }
  
      Goku.velocityY = Goku.velocityY + 1
  }
  

  


 if(Point>9){
   
  if(mousePressedOver(Leftarrow) || keyDown("LEFT_ARROW")){
    Goku.x = Goku.x-10;

      Goku.changeImage("Gokusleft",GokuImg4)
    
    Direction = "LEFT"
   }
   if(mousePressedOver(Rightarrow) || keyDown("RIGHT_ARROW")){
    Goku.x = Goku.x+10;
 
    Goku.changeImage("Gokusright",GokuImg)

    Direction = "RIGHT"
   }
 }
 else{
  if(mousePressedOver(Leftarrow) || keyDown("LEFT_ARROW")){
    Goku.x = Goku.x-10;

      Goku.changeImage("Gokuleftwalk",GokuImg3);
    
    Direction = "LEFT"
   }
   if(mousePressedOver(Rightarrow) || keyDown("RIGHT_ARROW")){
    Goku.x = Goku.x+10;
 
    Goku.changeImage("Gokurightwalk",GokuImg2);

    Direction = "RIGHT"
   }

 }






//
  if(DragonballGroup.isTouching(EnemyGroup)){
    score=score+1;
    DragonballGroup.destroyEach();
    EnemyGroup.destroyEach();
  }

  if(DragonballGroup2.isTouching(EnemyGroup)){
    score=score+1;
    DragonballGroup2.destroyEach();
    EnemyGroup.destroyEach();

  }

  if(Goku.isTouching(PowerBallGroup)){
    Point=Point+1;
    PowerBallGroup.destroyEach();
    happysound.play();
  }

  Spawnenemy();
  spawnPowerBall()


 if(Goku.isTouching(EnemyGroup)){
  health = health-1;
  EnemyGroup.destroyEach()
  hurtsound.play();
 }

 if(health === 0 && GameState === 1){
  GameState = 2
 }



 }



 if (GameState === 2){
  PlayButton.visible = false;
  gameOver.visible = true;
  restart.visible = true;
  Img.visible = false;
  restart.depth = Goku.depth;
  restart.depth =  restart.depth+1
 //set velcity of each game object to 0
 BAckground.velocityX = 0;
  Goku.velocityY = 0;
  Goku.velocityX = 0;
  EnemyGroup.setVelocityXEach(0);
 PowerBallGroup.setVelocityXEach(0);
 DragonballGroup.setVelocityXEach(0);
 //set lifetime of the game objects so that they are never destroyed
 EnemyGroup.setLifetimeEach(-1);
 PowerBallGroup.setLifetimeEach(-1);
 DragonballGroup.setLifetimeEach(-1);
 DragonballGroup2.setLifetimeEach(-1);
 if(mousePressedOver(restart)){
   reset();
 }
 }

 




 //

   drawSprites();
   fill("black")
   textSize(25)
   text("KillingScore: "+ score, 500,50);
   text("DragonBall: "+ Point, 500,70);
   textSize(28)
   text(health, 80,57);
   textSize(30)
   text(touche, windowWidth/3, windowHeight/3);
 }


 function createBall() {
   if(frameCount%7 === 0){
    var Dragonball= createSprite(50, 500, 60, 10);
    Dragonball.addImage(DragonballImg);
    Dragonball.x = Goku.x+40;
    Dragonball.y=Goku.y;
    Dragonball.velocityX = 15;
    Dragonball.scale = 0.1;
    Dragonball.lifetime = 500;
    DragonballGroup.add(Dragonball);
    Dragonball.depth = Goku.depth;
    Goku.depth =  Goku.depth + 1;
    return Dragonball;
   }



}

function createBall2() {
  if(frameCount%7 === 0){
    var Dragonball1= createSprite(50, 500, 60, 10);
    Dragonball1.addImage(DragonballImg);
    Dragonball1.x = Goku.x-40;
    Dragonball1.y=Goku.y;
    Dragonball1.velocityX = -15;
    Dragonball1.scale = 0.1;
    Dragonball1.lifetime = 150;

    DragonballGroup2.add(Dragonball1);
    Dragonball1.depth = Goku.depth;
    Goku.depth =  Goku.depth + 1;
    return Dragonball1;
  }



}

 function Spawnenemy(){
  if(frameCount % 300 === 0) {
    var Enemy = createSprite(windowWidth/2+800,Ground.y-70,10,40);
    position = Math.round(random(1,2))
    

  
    Enemy.lifetime = 500;
     if(position == 1){
     Enemy.x = windowWidth/2+900;
     Enemy.velocityX = -(7 + 3*score/20);
 
     var rand = Math.round(random(1,2));
     switch(rand){
       case 1: Enemy.addImage(EnemyImg);
               Enemy.scale= 0.15;
               break;
       case 2: Enemy.addImage(EnemyIMg2);
               Enemy.scale = 0.6;
               break;     
       default: break;
     }
 

     }
     else
     {
      if(position == 2){
        Enemy.x = windowWidth/2-900;
        Enemy.velocityX = (7 + 3*score/20);
        var rand6 = Math.round(random(1,2));
        switch(rand6){
          case 1: Enemy.addImage(EnemyImg3);
                  Enemy.scale= 0.15;
                  break;
          case 2: Enemy.addImage(EnemyImg4);
                  Enemy.scale = 0.6;
                  break;     
          default: break;
        }
    
      }

     }
    angrysound.play()
    //add each obstacle to the group
    EnemyGroup.add(Enemy);

    Enemy.depth = Goku.depth;
    Goku.depth =  Goku.depth + 1;

  }

}





function spawnPowerBall() {
  //write code here to spawn the cheese
  if (frameCount % 150 === 0) {
    PowerBall= createSprite(windowWidth/2+900,windowHeight/2-100,40,10);
    PowerBall.y = Math.round(random(windowHeight/2-100,windowHeight/2+200));
    PowerBall.addImage(PowerBallImg);
    PowerBall.scale = 0.1;
    PowerBall.velocityX = -(6 + 3*score/20);
   //assign lifetime to the variable
   PowerBall.lifetime = 500;
  
   //adjust the depth
   PowerBall.depth = Goku.depth;
   Goku.depth =  Goku.depth + 1;
  
    //add each cheese to the group
    PowerBallGroup.add(PowerBall);
}

}
function reset(){
  GameState=1;
  gameOver.visible=false;
  restart.visible=false;
  EnemyGroup.destroyEach();
  PowerBallGroup.destroyEach();
  DragonballGroup.destroyEach();
  score=0;
  Point = 0;
  health = 3;
  Goku.x = 650;
  Goku.y = 500;
}