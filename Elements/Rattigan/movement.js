document.addEventListener("keydown", makeJump);//listens for a key press
function makeJump(e) {
 if (e.key == " ") {//if the spacebar is pressed the ball gains y velcity
   dy -= 3;
 }
