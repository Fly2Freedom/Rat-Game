class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.gravity = 0.8
    this.maxSpeed = 5;
    this.width = 50;
    this.height = 100;
    this.active = true;
    this.jump = false;
  }

  spawn() {
    ctx.beginPath()
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  move() {
    if (this.active) {
      if (!keyLeft && !keyRight || keyLeft && keyRight) {
        this.xspeed *= this.friction;
      } else if (keyRight) {
        this.xspeed = 5;
      } else if (keyLeft) {
        this.xspeed = -5;
      }
      //Jump
      if (keyUp) {
        this.yspeed -= 1.5;
      }
      this.yspeed += this.gravity;

      //Cap speed at a certain amount (might not even need?)
      if (this.xspeed > this.maxSpeed) {
        this.xspeed = this.maxSpeed;
      } else if (this.xspeed < -this.maxSpeed) {
        this.xspeed = -this.maxSpeed;
      }
      if (this.yspeed > this.maxSpeed) {
        this.yspeed = this.maxSpeed;
      } else if (this.xspeed < -this.maxSpeed) {
        this.yspeed = -this.maxSpeed;
      }

      //Update the player's coordinates.
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  }
}

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var player;
var gameLoop;

var keyUp;
var keyDown;
var keyLeft;
var keyRight;

var player = new Player(600, 618);

window.onload = function() {
  //Set up key inputs
  inputs();
  //Start drawing loop
  gameLoop = setInterval(move, 1000/60);
}

function move() {
  player.move();
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
