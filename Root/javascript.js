var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

window.onload = function() {
  clear();
  const player = new Player(600, 618);
  player.spawn();
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,1280,720);
}
