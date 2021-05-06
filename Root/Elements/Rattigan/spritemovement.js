const frameWidth = 27; //Bigger = <--- || Smaller = --->
const frameHeight = 95; //Can't go above 95 or else it breaks the game??
const scale = 3;
const fps = 130;
const secondsToUpdate = 0.1 * fps;
var count = 0;
var frameIndex = 0;

var xPos = 575;
var yPos = 555;
var xspeed = 0;
var yspeed = 0;
var friction = 0.4;
var gravity = 1;
var maxSpeed = 10;
var active = true;
var jump = true;

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

const spriteSheet = new Image();
spriteSheet.src = "Elements/Assets/rat1.png";

const State = {
  states: {},
  generateState: function(name, startIndex, endIndex) {
    if (!this.states[name]) {
      this.states[name] = {
        frameIndex: startIndex,
        startIndex: startIndex,
        endIndex: endIndex
      };
    }
  },
  getState: function(name) {
    if (this.states[name]) {
      return this.states[name];
    }
  }
};

State.generateState("chill", 0, 0);
State.generateState("walk", 0, 6);

//0=1, 1.4=2, 3=2, 4.4=3, 6=4
function animate(state) {
  ctx.drawImage(
    spriteSheet,
    state.frameIndex * frameWidth,
    0,
    frameWidth,
    frameHeight,
    xPos,
    yPos,
    frameWidth * scale,
    frameHeight * scale
  );

  count ++;
  if (count > secondsToUpdate) {
    state.frameIndex ++;
    count = 0;
  }
  if (state.frameIndex > state.endIndex) {
    state.frameIndex = state.startIndex;
  }
}

function spriteMove() {
  if (active) {
    if (!keyLeft && !keyRight || keyLeft && keyRight) {
      xspeed *= friction;
    } else if (keyRight) {
      xspeed = 5;
    } else if (keyLeft) {
      xspeed = -5;
    }

    //Jump
    if (keyUp) {
      if (jump == false) {
        yspeed = -22;
      }
    }

    if (jump == false) {
      xspeed *= friction;
    } else {
      yspeed += gravity;
    }
    jump = true;

    //Make speed a whole number
    if (xspeed > 0) {
      xspeed = Math.floor(xspeed);
    } else {
      xspeed = Math.ceil(xspeed);
    }
    if (yspeed > 0) {
      yspeed = Math.floor(yspeed);
    } else {
      yspeed = Math.ceil(yspeed);
    }

    //Horizontal Collision
    let horizontalRect = {
      x: xPos + xspeed,
      y: yPos,
      width: frameWidth,
      height: frameHeight
    }

    //Vertical Collision
    let verticalRect = {
      x: xPos,
      y: yPos + yspeed,
      width: frameWidth,
      height: frameHeight
    }

    //Check for intersections
    for (let i = 0; i < walls.length; i++) {
      let borderRect = {
        x: walls[i].x,
        y: walls[i].y,
        width: walls[i].width,
        height: walls[i].height
      }
      if (checkIntersection(horizontalRect, borderRect)) {
        while (checkIntersection(horizontalRect, borderRect)) {
          horizontalRect.x -= Math.sign(xspeed);
        }
        xPos = horizontalRect.x;
        xspeed = 0;
      }
      if (checkIntersection(verticalRect, borderRect)) {
        while (checkIntersection(verticalRect, borderRect)) {
          verticalRect.y -= Math.sign(yspeed);
          jump = false;
        }
        yPos = verticalRect.y;
        yspeed = 0;
      }
    }
    xPos += xspeed;
    yPos += yspeed;
  }
}

function frame() {
  if (!keyLeft && !keyRight || keyLeft && keyRight) {
    animate(State.getState("chill"));
    requestAnimationFrame(frame);
  } else if (keyLeft || keyRight) {

    animate(State.getState("walk"));
    requestAnimationFrame(frame);
  }
}

frame();
