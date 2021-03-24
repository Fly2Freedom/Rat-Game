class Enemy {//this is where our enemy class that consists of both Goomba Cat and Among us
  constructor(x, y) { //this states the constructor we are starting in
    this.x = x;//the x coordinates
    this.y = y;//the y coordinates
    this.xspeed = 10;//how fast x will be
    this.yspeed = 10;//how fast y will be
    this.friction = 0.6;//slows the enemy down
    this.gravity = 1;//this keeps the rectangle from flying into the dark abyss that is outside the game
    this.maxSpeed = 5;//this caps how fast the rectangle can move
    this.width = 50;//this is the rectangles max width
    this.height = 100;//this is the rectangles max height
    this.active = true;
  }

  //Draw character
  spawn() {//this is the function to start the drawing of enemy
    ctx.beginPath()
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
  //Horizontal Collision
  let horizontalRect = {
    x: this.x + this.xspeed,
    y: this.y,
    width: this.width,
    height: this.height
  }

  //Vertical Collision
  let verticalRect = {
    x: this.x,
    y: this.y + this.yspeed,
    width: this.width,
    height: this.height
  }
}
console.log("yee haw")
