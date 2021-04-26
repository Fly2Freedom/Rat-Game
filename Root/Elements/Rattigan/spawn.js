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
    this.jump = true;
  }

  //Draw character
  spawn() {
    ctx.beginPath()
    ctx.fillStyle = "purple";
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
        if (this.jump == false) {
          this.yspeed = -22;
        }
      }

      if (this.jump == false) {
        this.xspeed *= this.friction;
      } else {
        this.yspeed += this.gravity;
      }
      this.jump = true;

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
          this.xspeed = 0; //When there is a collision on the left or right of the player hitbox, then stop all horizontal movement.
        }
        if (checkIntersection(verticalRect, borderRect)) {
          while (checkIntersection(verticalRect, borderRect)) {
            verticalRect.y -= Math.sign(this.yspeed);
            this.jump = false; //If the bottom of the player rectangle is interacting with another rectangle, the player must not be jumping.
          }
          this.y = verticalRect.y;
          this.yspeed = 0; //When there is a collision on the top or bottom of the player hitbox, then stop all vertical movement.
        }
      }

      //Update the player's coordinates.
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  }
}
