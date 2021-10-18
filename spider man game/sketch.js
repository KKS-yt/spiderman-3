var spiderman
var DrOct
var web
var bg
var heart1,heart2,heart3,h1,h2,h3;
var gamestate="Play";
var life=3;
var SpidermanIMG;
var webGroup,octGroup;
var Score=0;
var reset,resetbutton;

function preload(){
bg=loadImage("bg.jpg")
h1=loadImage("heart 1.png")
h2=loadImage("heart 2.png")
h3=loadImage("hearts 3.png")
SpidermanIMG=loadImage("spiderman normal.png");
s2=loadImage("spiderman falling.png");
DrOctimg=loadImage("dr oct.png")
spidermanwebimg=loadImage("spiderman websling.PNG")
}
 function setup(){
   createCanvas(displayWidth,displayHeight);
  spiderman=createSprite(displayWidth-1150,displayHeight-370,50,50);
  spiderman.addImage("spider",SpidermanIMG);
  spiderman.scale=1.7
  heart1=createSprite(displayWidth-150,40,20,20);
  heart1.addImage("h1",h1);
  heart2=createSprite(displayWidth-100,40,20,20);
  heart2.addImage("h2",h2);
  heart3=createSprite(displayWidth-170,50,20,20);
  heart3.addImage("h3",h3);
  heart3.scale=0.7
  heart2.scale=0.7
  heart1.scale=0.7
  heart1.visible=false
  heart2.visible=false
  webGroup=new Group()
  octGroup=new Group()


  
  
 }
 function draw(){
   background(bg);

  if (gamestate==="Play"){
    if(life===3){
      heart1.visible=false
      heart2.visible=false
      heart3.visible=true
        
    }
    if (life===2){
      heart1.visible=false
      heart2.visible=true
      heart3.visible=false
    }
    if (life===1){
      heart1.visible=true
      heart2.visible=false
      heart3.visible=false
    }
    if (life===0){
      gamestate="lost"
  }

 DrOctopus();
  if(keyDown("UP_ARROW")){
    spiderman.y=spiderman.y-5
  }

  if(keyDown("DOWN_ARROW")){
    spiderman.y=spiderman.y+5
  }
  if(keyWentDown("space")){
    web=createSprite(displayWidth-1150,spiderman.y,10,10);
    web.velocityX=10
    webGroup.add(web)
    spiderman.depth=web.depth;
    spiderman.depth=spiderman.depth+2;
    //spiderman.addImage("sp",spidermanwebimg);
   //spiderman.changeImage(spidermanwebimg)
     
  
  }
  if(keyWentUp("space")){
    spiderman.addImage("spider",SpidermanIMG)
  }
if(octGroup.isTouching(webGroup)){
  for (var i=0;i<octGroup.length;i++){
    if (octGroup[i].isTouching(webGroup)){
      octGroup[i].destroy();
      webGroup.destroyEach();
      Score=Score+1

    
    }
    
  }
}
if(octGroup.isTouching(spiderman)){
  for(var i=0;i<octGroup.length;i++){
    if(octGroup[i].isTouching(spiderman)){
      octGroup[i].destroy();
      life=life-1;
    }
  }
}
  }
  

  if(gamestate==="lost"){
    octGroup.destroyEach();
    spiderman.addImage(s2);
    textSize(100);
    fill ("red");
    text("You Lost! , score ="+ Score,displayHeight/2,displayHeight/2)
    textSize(75);
    text("Press 'r' to restart",displayWidth/2,displayHeight/2+200);
    heart1.visible=false;
    if(keyDown("r")){
      reset();
    }
  }
  if (Score===5){
    gamestate="win"
  }
  if(gamestate==="win"){
    octGroup.destroyEach();
    textSize(100);
    fill ("red");
    text("You Won!score = " + Score,displayWidth/2,displayHeight/2);
    textSize(75);
    text("Press 'r' to restart",displayWidth/2,displayHeight/2+200);
    if(keyDown("r")){
      reset();
    }
  }






   drawSprites();
   textSize(50)                                                          
   fill("red"); 
  text("Lives ="+life,displayWidth-245,displayHeight/2-355)

  text("Score="+Score,displayWidth-245,displayHeight/2-305)
  
  }


  function DrOctopus()
  {
    if(frameCount%97===0){
      DrOct=createSprite(random(1200,1600),random(100,700),40,40);
      DrOct.addImage(DrOctimg);
      DrOct.velocityX=-5
      octGroup.add(DrOct)
      DrOct.lifetime=600;
      DrOct.scale=1.8;


    }

    
  }
  function reset(){
    Gamestate="Play"

  }
