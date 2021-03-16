class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;
    this.active = true;
  }

  spawn() {
    ctx.beginPath()
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  move() {
    if (this.active) {
      //Horizontal
      if (!keyLeft && !keyRight || keyLeft && keyRight) {
        //Stop movement
        this.xspeed *= this.friction;
      } else if (keyRight) {
        this.xspeed++;
      } else if (keyLeft) {
        this.xspeed--;
      }
      //Vertical

      //Speed Correction

      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  }
}
