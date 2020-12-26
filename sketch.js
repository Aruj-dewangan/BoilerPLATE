var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) 
  {
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}