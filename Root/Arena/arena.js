class Arena {
  constructor(x, y, width, height, type, timer) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  //Draw blocks
  draw() {
    //ctx.fillStyle = "brick";

    if (this.type === 1) { //Rectangle Type 1 = Brick Block Sprites
    } else if (this.type === 2) { //Rectangle Type 2 = Pipe Sprites
    //  ctx.fillStyle = "pipe";
      var img = new Image();
      img.src = "Elements/Assets/new pow block.png";
      ctx.drawImage(img, 600, 360, 60, 60,);
      var img = new Image();
      img.src = "Elements/Assets/pipe1.png";
      ctx.drawImage(img, -25, 60, 200, 250,);
      var img = new Image();
      img.src = "Elements/Assets/pipe2.png";
      ctx.drawImage(img, 1100, 70, 200, 250,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, 600, 650, 800, 70,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, -25, 650, 800, 70,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, -335, 500, 800, 50,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, 790, 500, 800, 50,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, 900, 250, 800, 50,);
      var img = new Image();
      img.src = "Elements/Assets/platform.png";
      ctx.drawImage(img, -400, 250, 800, 50,);
    } else if (this.type === 3) { //Rectangle Type 3 = Pow Block Sprite
    //  ctx.fillStyle = "pow";
    } else if (this.type === 4) { //Rectangle Type 4 = Left Side Amogus Enemies

      if (this.x <= 300) { //Movement for enemies on the left side
        this.x = (this.x + 2);
      } else if (this.x >= 1500) {
        this.x = (this.x - 2);
      }

    } else if (this.type === 5) { //Rectangle Type 5 = Right Side Amogus Enemies

      if (this.x >= 900) { //Movement for enemies on the right side
        this.x = (this.x - 2);
      } else if (this.x <= 0) {
        this.x = (this.x + 2);
      }

    }
    //ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
