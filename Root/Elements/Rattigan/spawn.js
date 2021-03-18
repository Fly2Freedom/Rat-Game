class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.4;
    this.gravity = 1;
    this.maxSpeed = 10;
    this.width = 50;
    this.height = 100;
    this.active = true;
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
        if (this.yspeed < 1) {
          this.yspeed = -15;
        } else if (this.yspeed < -20) {
          this.yspeed += this.friction;
        }
      }
      this.yspeed += this.gravity;

      //Make speed a whole number
      if (this.xspeed > 0) {
        this.xspeed = Math.floor(this.xspeed);
      } else {
        this.xspeed = Math.ceil(this.xspeed);
      }
      if (this.yspeed > 0) {
        this.yspeed = Math.floor(this.yspeed);
      } else {
        this.yspeed = Math.ceil(this.yspeed);
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
            horizontalRect.x -= Math.sign(this.xspeed);
          }
          this.x = horizontalRect.x;
          this.xspeed = 0;
        }
        if (checkIntersection(verticalRect, borderRect)) {
          while (checkIntersection(verticalRect, borderRect)) {
            verticalRect.y -= Math.sign(this.yspeed);
          }
          this.y = verticalRect.y;
          this.yspeed = 0;
        }
      }

      //Update the player's coordinates.
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  }
}
