class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 10;
    this.yspeed = 10;
    this.friction = 0.6;
    this.gravity = 1;
    this.maxSpeed = 5;
    this.width = 50;
    this.height = 100;
    this.active = true;
  }

  //Draw character
  spawn() {
    ctx.beginPath()
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}
console.log("yee haw")
