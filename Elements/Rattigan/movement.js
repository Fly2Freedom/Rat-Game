document.addEventListener("keydown", makeJump);//listens for a key press
function makeJump(e) {
 if (e.key == " ") {//if the spacebar is pressed the ball gains y velcity
   dy -= 3;
 }

 document.addEventListener("keydown", makeMoveLeft); //Looks for when a key is pressed.
 function makeMoveLeft(e) { //This function will make the ball jump.
   if (e.key == "A") { //When the a is pressed then Rattigan  should move left  .
     player.yMove -= 5; //The ball will be tossed up a short distance.
   }
   if (e.key == "r") {
     player.xMove = -player.xMove;
   }
 }
