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
console.log("Hello world")
