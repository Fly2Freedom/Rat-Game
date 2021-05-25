class Amogus {
  constructor(color, name) {
    this.color = color;
    this.name = name;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.gravity = 1;
    this.maxSpeed = 3;
    this.width = 50;
    this.height = 80;
    this.active = true;
  }

  spawn() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();


  }
}






console.log("Hi world");
