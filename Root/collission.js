class amogus {
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
      move() {
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
    }
}
