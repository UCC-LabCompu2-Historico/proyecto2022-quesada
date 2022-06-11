const canvas = document.getElementById('venn');
const context = canvas.getContext('2d');
const radius = 100;
const centerX1 = canvas.width / 2.55;
const centerY1 = canvas.height / 1.6;
const centerX2 = canvas.width / 1.65;
const centerY2 = canvas.height / 1.6;
const centerX3 = canvas.width / 2;
const centerY3 = canvas.height / 2.8;
context.globalAlpha = 0.5;

function dibujar2(){

  context.beginPath();
  context.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.arc(centerX2, centerY2, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.arc(centerX3, centerY3, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.font = "22px Montserrat";
  context.fillStyle = "white";
  context.fillText("A", 160, 120);
  context.fillText("SA", 200, 200);
  context.fillText("B", 420, 120);
  context.fillText("SB", 370, 200);
  context.fillText("AB", 285, 200);
}

function dibujar3(){

  context.beginPath();
  context.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.arc(centerX2, centerY2, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.arc(centerX3, centerY3, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.font = "22px Montserrat";
  context.fillStyle = "white";
  context.fillText("A", 355, 55);
  context.fillText("SA", 285, 100);
  context.fillText("B", 425, 350);
  context.fillText("SB", 385, 280);
  context.fillText("C", 160, 350);
  context.fillText("SC", 185, 280);
  context.fillText("AB", 335, 190);
  context.fillText("BC", 285, 280);
  context.fillText("AC", 230, 190);
  context.fillText("ABC", 275, 220);
  context.fillText("U", 15, 30);
}
