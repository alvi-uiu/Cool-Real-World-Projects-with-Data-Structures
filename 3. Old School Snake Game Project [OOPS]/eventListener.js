// check if user clicked in the canvas

canvas = document.getElementById("mycanvas");

function f() {
  console.log("you clicked in the canvas !");
}

canvas.addEventListener("click", f);

// which key pressed :

function f1(e) {
  console.log("A key got pressed", e.key);
}

document.addEventListener("keydown", f1);
