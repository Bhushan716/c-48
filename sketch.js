
var trex ,trex_running;
var ground,groundImage

function preload(){
 backgroundImage = loadImage("bg.jpg"); 
 boyImage = loadImage("character1.png");
 coinImage = loadImage("coin.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 bg = createSprite(300,100,600,200);
 bg.addImage("background",backgroundImage);
 bg.scale = 3;
 bg.velocityX = -3;

 boy = createSprite(50,160,50,50);
 boy.addImage("boy",boyImage)
 coingroup = new Group()
}

function draw(){
  background("white");
 if(bg.x<0){
   bg.x= bg.width/3
 }
  boy.y = mouseY;
  if(coingroup.isTouching(boy)){
    coingroup[0].destroy()
  }
  spawnCoins()
drawSprites()
}
function spawnCoins(){
if(frameCount%50===0){
  var coin = createSprite(600,160,10,10);
  coin.addImage("coin",coinImage);
  coin.velocityX = -3;
  coin.scale= 0.3;
  coingroup.add(coin);
}
}