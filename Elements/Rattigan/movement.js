document.addEventListener("keydown", makeJump);//listens for a key press
function makeJump(e) {
 if (e.key == " ") {//if the spacebar is pressed the ball gains y velcity
<<<<<<< Updated upstream
   player.yMove -= 3;
 }

 document.addEventListener("keydown", makeMoveLeft); //Looks for when the "A" key is pressed.
 function makeMoveLeft(e) { //This function will make the ball move to the left.
   if (e.key == "A") { //When the a is pressed then Rattigan  should move left  .
     player.yMove -= 5; //Rattigan will move a little bit
   }

 document.addEventListener("keydown", makeMoveRight);//listens for a key press
 function makeBounce(e) {
  if (e.key == "D") {//if the spacebar is pressed the ball gains y velcity
    player.yMove-= 3;
 }
 document.addEventListener("keydown", makeDrop);//listens for a key press
 function makeJump(e)
  if (e.key == "S") {//if the spacebar is pressed the ball gains y velcity
    player.yMove -= 3;
  }
=======
   dy -= 3;
 }

 document.addEventListener("keydown", makeMoveLeft); //Looks for when a key is pressed.
 function makeMoveLeft(e) { //This function will make the ball jump.
   if (e.key == "A") { //When the spacebar is pressed (the empty string being the spacebar).
     player.yMove -= 5; //The ball will be tossed up a short distance.
   }
   if (e.key == "a") {
     player.xMove = -player.xMove;
   }
 }
>>>>>>> Stashed changes
