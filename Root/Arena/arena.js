class Arena {
  constructor(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  //Draw blocks
  draw() {
    if (this.type === 1) { //Rectangle Type 1 = Brick Block Sprites
      ctx.fillStyle = "brick";
    } else if (this.type === 2) { //Rectangle Type 2 = Pipe Sprites
      ctx.fillStyle = "pipe";
    } else if (this.type === 3) { //Rectangle Type 3 = Pow Block Sprite
      ctx.fillStyle = "pow";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}
