var canvas;
var backgroundImage, bgImg;
var database, gameState;
var form, player, playerCount;
var allPlayers, shooter1, shooter2;
var shooters = [];
var redCube,blueCube;

function preload() {
  backgroundImage = loadImage("assets/bg_img.jpg");
  redCube = loadImage("assets/redBox.png");
  blueCube=loadImage("assets/blueCube.jpg");
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

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
