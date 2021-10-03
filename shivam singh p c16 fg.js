var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
 background(0);
 if(gameState === PLAY){

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

  /*Uncomment correct statement so that 
  game goes to "END" state 
  when red balloon is hit*/
  //if (arrowGroup.isTouching(redB)) 
  //if (arrowGroup.Collide(redB)) 
  //if (arrowGroup.isCollide(redB)) 
  if(frameCount>700)//comment this line after selecting the solution
  {
    redB.destroyEach();
    gameState=END; 
   }
 
  if (gameState === END) {
  bow.destroy();
  scene.velocityX = 0;
}


 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}

/*Uncomment correct if block to 
destroy the blue balloon when hit 
by the arrows */

//  if (arrowGroup.isTouching(blueB)) {
//   blueB.destroyEach();
//   arrowGroup.destroyEach();
//   score=score+2;
// }


//  if (arrowGroup.isTouching(redB)) {
//   blueB.destroyEach();
//   arrowGroup.destroyEach();
// }


//  if (arrowGroup.isTouching(blueB)) {
//   arrowGroup.destroyEach();
// }


if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
 }
  
  drawSprites();
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  

}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  var select_balloon=Math.round(random(1,4));
  
  if(frameCount%80===0){
    
    if(select_balloon===1){
      redBalloon()
    }
    else if (select_balloon===2)
    {
      greenBalloon()
    }
    else if (select_balloon===3){
      blueBalloon()
    }
    else if (select_balloon===4){
      pinkBalloon()
    }
    
    }
   
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(0,600)),10,10)
  red.addImage(red_balloonImage)
  red.velocityX=3
  red.scale=0.1
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(0,600)),10,10)
  green.addImage(green_balloonImage)
  green.velocityX=3
  green.scale=0.1
}


function blueBalloon(){
  var blue = createSprite(0,Math.round(random(0,600)),10,10)
  blue.addImage(blue_balloonImage)
  blue.velocityX=3
  blue.scale=0.1
}


function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(0,600)),10,10)
  pink.addImage(pink_balloonImage)
  pink.velocityX=3
  pink.scale=1.2
}
var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  

}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  var select_balloon=Math.round(random(1,4));
  
  if(frameCount%80===0){
    
    if(select_balloon===1){
      redBalloon()
    }
    else if (select_balloon===2)
    {
      greenBalloon()
    }
    else if (select_balloon===3){
      blueBalloon()
    }
    else if (select_balloon===4){
      pinkBalloon()
    }
    
    }
   
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(0,600)),10,10)
  red.addImage(red_balloonImage)
  red.velocityX=3
  red.scale=0.1
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(0,600)),10,10)
  green.addImage(green_balloonImage)
  green.velocityX=3
  green.scale=0.1
}


function blueBalloon(){
  var blue = createSprite(0,Math.round(random(0,600)),10,10)
  blue.addImage(blue_balloonImage)
  blue.velocityX=3
  blue.scale=0.1
}


function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(0,600)),10,10)
  pink.addImage(pink_balloonImage)
  pink.velocityX=3
  pink.scale=1.2
}




   
}
