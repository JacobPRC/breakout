const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
