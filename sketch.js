var sea,seaImage, ship, shipImg1, shipImg2;

function preload(){
  
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png");
shipImg2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
  
}

function setup(){
  createCanvas(400,400);
  // Create sea sprite
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -3
  sea.scale = 0.3;
  
  // Create ship sprite
  ship = createSprite(130,250,30,30);
  ship.scale = 0.3;
  ship.addAnimation("sailing", shipImg1);
  ship.addAnimation("shiplightOn", shipImg2);
  
  
}

function draw() {
  background("blue");
  
  // sea animation
 if(sea.x < 0)
 {
   sea.x = sea.width/8   
 }
 // ship animation
  if (keyDown("space"))
    
    
    { ship.addAnimation("sailing",shipImg2);
     
     
    }
  drawSprites();
  
}