// Canvas obj is used to draw grafics in JS :

canvas = document.getElementById("mycanvas");
// manipulating object in the DOM :
canvas.width = 500;
canvas.height = 500;

// canvas context is used to draw in the grafics

pen = canvas.getContext("2d");

pen.fillStyle = "aqua";

pen.fillRect(30, 30, 30, 30);
