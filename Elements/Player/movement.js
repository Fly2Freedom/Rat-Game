document.addEventListener("keydown", makeBounce);//listens for a key press
function makeBounce(e) {
 if (e.key == " ") {//if the spacebar is pressed the ball gains y velcity
   dy -= 3;
 }
 if (e.key == "r") {//if thr "r" key is pressed the x direction is flipped
   gameState == 1;
 }
}
