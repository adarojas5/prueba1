let imgMalo, imgBuena;
let juego;
function preload(){
  imgMalo = loadImage("data/pastelrosa.png");
   imgBuena = loadImage("data/pasteloscuro.png");
}
function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(220);

  if (juego.mostrandoCreditos) {
    juego.mostrarCreditos();
  } else if (juego.jugando) {
    juego.generarObjetos();
    juego.actualizar();
  } else {
    if (juego.personaje.vidas <= 0 || juego.tiempoRestante <= 0) {
      juego.mostrarFinDelJuego();
    } else {
      juego.mostrarPantallaInicio();
    }
  }
}

function mousePressed() {
  juego.clic(mouseX, mouseY);
  
}
