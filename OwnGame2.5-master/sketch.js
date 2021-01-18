var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;



function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/motor1.png");
  car2_img = loadImage("../images/motor2.png");
  car3_img = loadImage("../images/motor3.png");
  car4_img = loadImage("../images/motor4.png");
  ground = loadImage("../images/ground.png");
  bike = loadImage("../images/Bike.png");
  tank = loadImage("../images/Tank.png")
  Weapon = loadImage("../images/weapon.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  //tank1 = createSprite(displayWidth/2, displayHeight/2)
  //tank1.addImage(tank);
  //tank1.scale = 0.4;
 

  
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
