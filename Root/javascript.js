//Drawing variables
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

//Player/Enemy objects and variable for looping the game functions
var player = new Player(600, 540);
var goomba = new Enemy(210,110);
var amogus = new Enemy(210,350);
var newgoomba = new Enemy(1070,110);
var newAmogus = new Enemy(1070,350)
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

  walls.push(new Arena(-30, 500, 500, 50, 1)); //Platform 1 (x, y, width, height type)

  walls.push(new Arena(790, 500, 580, 50, 1)); //Platform 2

  walls.push(new Arena(-20, 250, 420, 50, 1)); //Platform 3

  walls.push(new Arena(860, 250, 420, 50, 1)); //Platform 4

  walls.push(new Arena(0, 130, 160, 100, 2)); //Top Left Pipe

  walls.push(new Arena(1120, 125, 160, 100, 2)); //Top Right Pipe

  walls.push(new Arena(600, 360, 60, 60, 3)); //POW Block

  walls.push(new Arena(0, 0, 1280, 2, 1)); //Ceiling

  walls.push(new Arena(0, 0, 2, 780, 1)); //Left Wall

  walls.push(new Arena(1279, 0, 2, 780, 1)); //Right Wall

  walls.push(new Arena(210, 150, 50, 100, 4)); //Top Left Amogus
  
  walls.push(new Arena(210, 400, 50, 100, 4)); //Bottom Left Amogus

  walls.push(new Arena(1000, 150, 50, 100, 5)); //Top Right Amogus

  walls.push(new Arena(1070, 400, 50, 100, 5)); //Bottom Right Amogus

}

//Checks for movement 60 times per second (60fps) and then draws everything.
function move() {
  //Give's the player 'hitbox' movement functionality.

  //Give's the player sprite movement functionality.
  spriteMove();
  //Draws (updates) the player's position and other things every frame.
  draw();
}

function draw() {
  //Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Draw player

  //Draw walls
  for (let i = 0; i < walls.length; i++) {
    walls[i].draw();
    //ctx.fillStyle = "maroon";
    //ctx.fillRect(0,650,1280,100,1);


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

//Used to make a 'hitbox' around the player to check for intersections.
function checkIntersection(r1, r2) {
  if (r1.x >= r2.x + r2.width) {
    return false;
  } else if (r1.x + r1.width <= r2.x) {
    return false;
  } else if (r1.y >= r2.y + r2.height) {
    return false;
  } else if (r1.y + r1.height <= r2.y) {
    return false;
  } else {
    return true;
  }
}

 var marker = 1;
function goombaMovement(){ //top left enemy
  if (marker == 1 && goomba.x != 410) {
    goomba.x ++;
  }else if (goomba.x == 410) {
     marker = 0;
    goomba.x --;
  } else if (marker == 0 && goomba.x >= 160) {
    goomba.x --;
  }else if (goomba.x <= 160 && goomba.x != 410) {
    marker = 1;
    goomba.x ++;
  }
}
setInterval(goombaMovement, 1);

var marker2 = 1;
function newgoombaMovement(){ //top right enemy
  if (marker2 == 1 && newgoomba.x != 860) {
    newgoomba.x --;
  } else if (newgoomba.x == 860) {
     marker2 = 0;
    newgoomba.x ++;
  } else if (marker2 == 0 && newgoomba.x != 1070) {
    newgoomba.x ++;
  }else if (newgoomba.x == 1070) {
    marker2 = 1;
    newgoomba.x --;
  }
}
setInterval(newgoombaMovement, 1);


var marker3 = 1;
function amogusMovement(){ //middle left enemy

  if (marker3 == 1 && amogus.x != 420) {
    amogus.x ++;
  } else if (amogus.x == 420) {
     marker3 = 0;
    amogus.x --;
  } else if (marker3 == 0 && amogus.x >= 2) {
    amogus.x --;
  }else if (amogus.x <= 2 && amogus.x != 420) {
    marker3 = 1;
    amogus.x ++;
  }
}
setInterval(amogusMovement, 1);


var marker4 = 1;
function newAmogusMovement(){ //middle right enemy
  if (marker4 == 1 && newAmogus.x != 790) {
    newAmogus.x --;
  } else if (newAmogus.x == 790) {
     marker4 = 0;
    newAmogus.x ++;
  } else if (marker4 == 0 && newAmogus.x != 1229) {
    newAmogus.x ++;
  }else if (newAmogus.x >= 1229 && newAmogus.x != 790) {
    marker4 = 1;
    newAmogus.x --;
  }
}
setInterval(newAmogusMovement, 1);
