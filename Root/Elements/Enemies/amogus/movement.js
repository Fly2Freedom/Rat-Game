/*
const frameWidth = 27; //Bigger = <--- || Smaller = --->
const frameHeight = 95; //Can't go above 95 or else it breaks the game??
const scale = 3;
const fps = 130;
const secondsToUpdate = 0.1 * fps;
var count = 0;
var frameIndex = 0;

var xPos = 210;
var yPos = 350;
var xspeed = 0;
var yspeed = 0;
var friction = 0.4;
var gravity = 1;
var maxSpeed = 10;
var active = true;
var jump = true;

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

const spriteSheet1 = new Image();
spriteSheet1.src = "Elements/Assets/amogus1.png";

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
function spriteMove() {if (xspeed > 0) {
  xspeed = Math.floor(xspeed);
} else {
  xspeed = Math.ceil(xspeed);
}
if (yspeed > 0) {
  yspeed = Math.floor(yspeed);
} else {
  yspeed = Math.ceil(yspeed);
}
}
*/
