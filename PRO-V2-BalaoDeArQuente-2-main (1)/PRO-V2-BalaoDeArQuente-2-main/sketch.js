var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var bar

function preload(){
  bgImg = loadImage("assets/bg.png");
  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");

}

function setup(){

  createCanvas(400,400)
//imagem de plano de fundo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3;

//criando canto superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;

      
//criando o balão      
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloonAnimation", balloonImg);
  balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular

        if(keyDown("SPACE")){
          balloon.velocityY = -6;
        }
        
          //adicionando gravidade
          balloon.velocityY += 1;
        
       
        //gerando obstáculos no topo
        spawnObstaclesTop();
        Bar();

     drawSprites();
      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1)
      obstacleTop.scale = 0.1;
      obstacleTop.velocityX = -4;
      
    //posições y aleatórias para os obstáculos do topo
       obstacleTop.y = Math.round(random(10,100));


    //gerar obstáculos aleatórios no topo
      var rand = Math.round(random(1,2));
      switch(rand){
        case 1: obstacleTop.addImage(obsTop1);
        break;
        case 2: obstacleTop.addImage(obsTop2);
        break;
        default: break;
      }
   
     //definir tempo de vida para a variável

     obstacleTop.lifetime = 100;

     balloon.depth += 1;
  
      }
}

 function Bar() {
  if(World.frameCount % 60 === 0) {
  bar = createSprite(400,200,10,800);
  bar.velocityX = -6;
  bar.depth = balloon.depth;
  bar.lifetime = 400/6;
  bar.visible = false;
}
}


  
