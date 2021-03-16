var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var player;
var gameLoop;

var keyUp;
var keyDown;
var keyLeft;
var keyRight;

window.onload = function() {
  //Set up key inputs
  inputs();
  //Create new player
  const player = new Player(600, 618);
  //Start drawing loop
  gameLoop = setInterval(move, 1000/300);
}

function move() {
  player.move()

  clear();
}

function clear() {
  //Clear canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,1280,720);
  //Draw player
  player.spawn();
}

function inputs() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      keyUp = true;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      keyLeft = true;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      keyDown = true;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      keyRight = true;
    }
  });
  document.addEventListener("keyup", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      keyUp = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      keyLeft = false;
    } else if (event.key === "s" || event.key === "ArrowDown") {
      keyDown = false;
    } else if (event.key === "d" || event.key === "ArrowRight") {
      keyRight = false;
    }
  });
}
