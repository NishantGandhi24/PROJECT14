var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score =0;
var pinkgroup;
var bluegroup;
var greengroup;
var redgroup;
var arrowgroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(1300, 700);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 6
  
  // creating bow to shoot arrow
  bow = createSprite(1200,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1.5;

  pinkgroup = new Group();
  arrowgroup = new Group()
  pinkgroup = new Group()
  redgroup= new Group()
  greengroup= new Group()
  bluegroup= new Group()
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
   

    if (pinkgroup.isTouching(arrowgroup)){
      score=score+1
      pinkgroup.destroyEach();
      arrowgroup.destroyEach();
    }
    if (greengroup.isTouching(arrowgroup)){
      score=score+1
      greengroup.destroyEach();
      arrowgroup.destroyEach();
    }
    if (bluegroup.isTouching(arrowgroup)){
      score=score+1
      bluegroup.destroyEach();
      arrowgroup.destroyEach();
    }
    if (redgroup.isTouching(arrowgroup)){
      score=score+1
      redgroup.destroyEach();
      arrowgroup.destroyEach();
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
   if (keyDown("space")) {
    createArrow();
    }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if(select_balloon == 2){
      blueBalloon();
    }
    else if(select_balloon == 3){
      greenBalloon();
    }
    else if(select_balloon == 4){
      pinkBalloon();
    }
  }
  
  drawSprites();
  fill("black")
  textSize(30);
  text("SCORE:"+score,500,550);  
}



// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 1200;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 280;
  arrow.scale = 0.3;
  arrowgroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 380;
  red.scale = 0.1;
  redgroup.add(red)

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 380;
  blue.scale = 0.1
  bluegroup.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 380;
  green.scale = 0.1
  greengroup.add(green)
}


function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 380;
  pink.scale = 1;
  pinkgroup.add(pink)
}
