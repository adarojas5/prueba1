let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(6, 13, 52);
  juego.mostrar();
}

function mousePressed() {
    juego.verificarClick(mouseX, mouseY); 
}
 
