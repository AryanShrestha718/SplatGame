var canvas;
var backgroundImage
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers

function preload() {
  backgroundImage = loadImage("Background.jpg");
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }



  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
