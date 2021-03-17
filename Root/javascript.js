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

  //Draw character
  spawn() {
    ctx.beginPath()
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  //Movement
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

//Drawing variables
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

//Player object and variable for looping the game functions
var player = new Player(600, 540);
var gameLoop;

//Keypress variables
var keyUp;
var keyDown;
var keyLeft;
var keyRight;

//Variable for drawing walls
var walls = [];

//When the 'game' opens...
window.onload = function() {
  //Set up key inputs
  inputs();
  //Start the drawing loop
  gameLoop = setInterval(move, 1000/60);
  //Create walls
  walls.push(new Arena(0, 650, 1280, 100, 1)); //Floor (x, y, width, height type)

  walls.push(new Arena(-30, 440, 500, 50, 1)); //Platform 1

  walls.push(new Arena(790, 440, 580, 50, 1)); //Platform 2

  walls.push(new Arena(-20, 210, 420, 50, 1)); //Platform 3

  walls.push(new Arena(860, 210, 420, 50, 1)); //Platform 4

  walls.push(new Arena(0, 520, 160, 100, 2)); //Bottom Left Pipe

  walls.push(new Arena(1120, 520, 160, 100, 2)); //Bottom Right Pipe

  walls.push(new Arena(0, 80, 160, 100, 2)); //Top Left Pipe

  walls.push(new Arena(1120, 80, 160, 100, 2)); //Top Right Pipe

  walls.push(new Arena(600, 360, 60, 60, 3)); //POW Block

}

//Checks for movement 60 times per second (60fps) and then draws everything.
function move() {
  player.move();
  draw();
}

function draw() {
  //Clear canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,1280,720);
  //Draw player
  player.spawn();
  //Draw walls
  for (let i = 0; i < walls.length; i++) {
    walls[i].draw();
  }
}

//Defines when keys are pressed
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
