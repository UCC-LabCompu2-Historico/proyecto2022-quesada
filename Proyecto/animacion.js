const radius = 100;
const centerX1 = 240;
var centerY1 = 200;
var centerY12 = 250;
const centerX2 = 360;
var centerY2 = 200;
var centerY22 = 250;
const centerX3 = 300;
var centerY3 = -100;
var centerY32 = 140;
/**
 * Realiza la animación de agregar el tercer conjunto
 * @method animación1
 */
function animacion1(){
  const canvas = document.getElementById('venn');
  const context = canvas.getContext('2d');

  context.clearRect(0,0,600,400);
  context.clearRect(0,0,600,400);
  context.clearRect(0,0,600,400);

  context.globalAlpha = 0.5;

  context.beginPath();
  context.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(centerX2, centerY2, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(centerX3, centerY3, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  if (centerY1 < 250){
    centerY1 += 5;
    centerY2 += 5;
  }
  if (centerY3 < 140) {
    centerY3 += 5;
  }
  if (centerY3 === 140){
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
}
/**
 * Realiza la animación de eliminar el tercer conjunto
 * @method animación2
 */
function animacion2(){
  const canvas = document.getElementById('venn');
  const context = canvas.getContext('2d');

  context.clearRect(0,0,600,400);
  context.clearRect(0,0,600,400);
  context.clearRect(0,0,600,400);

  context.globalAlpha = 0.5;

  context.beginPath();
  context.arc(centerX1, centerY12, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(centerX2, centerY22, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(centerX3, centerY32, radius, 0, 2 * Math.PI);
  context.fillStyle = '#17293a';
  context.fill();
  context.stroke();

  if (centerY12 > 200){
    centerY12 -= 5;
    centerY22 -= 5;
  }

  centerY32 -= 5;

  if (centerY32 < -100){
    context.font = "22px Montserrat";
    context.fillStyle = "white";
    context.fillText("A", 160, 120);
    context.fillText("SA", 200, 200);
    context.fillText("B", 420, 120);
    context.fillText("SB", 370, 200);
    context.fillText("AB", 285, 200);
    context.fillText("U", 15, 30);
  }
}
