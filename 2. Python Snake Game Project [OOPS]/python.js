// Canvas obj is used to draw grafics in JS :
/*

canvas = document.getElementById("mycanvas");
// manipulating object in the DOM :
canvas.width = 500;
canvas.height = 500;

// canvas context is used to draw in the grafics

pen = canvas.getContext("2d");

pen.fillStyle = "aqua";

pen.fillRect(30, 30, 30, 30);


*/

// implementing game-loop function : (move the obj until game over)

function init() {
  console.log("in init");
  canvas = document.getElementById("mycanvas");
  h = canvas.height = 600;
  w = canvas.width = 600;
  pen = canvas.getContext("2d");
  game_over = false;
  rect = {
    x: 20,
    y: 20,
    w: 40,
    h: 40,
    speed: 10,
  };
}

function draw() {
  pen.clearRect(0, 0, w, h);
  pen = canvas.getContext("2d");
  pen.fillStyle = "aqua";
  pen.fillRect(rect.x, rect.y, rect.w, rect.h);
}

function update() {
  rect.x += rect.speed;
  if (rect.x > w - rect.w || rect.x < 0) {
    rect.speed *= -1;
  }
}

function game_loop() {
  if (game_over) {
    clearInterval(f);
  }

  console.log("in game-loop");
  draw();
  update();
  update();
  f;
}

// now we need to call init once and game-loop again and again :

init();
f = setInterval(game_loop, 100);
