let juego;
let imgBuena1, imgBuena2, imgBuena3, imgBuena4, imgMala2, imgMala1, imgMala3;
let imgPersonaje;
//let  sonidoMusica;

function preload () {
 // sonidoMusica = document.getElementById("bosque"); // Acceder al elemento de audio
  imgBuena1 = loadImage ("data/velasoscuras.png");
  imgBuena2 = loadImage ("data/pasteloscuro.png");
  imgBuena3 = loadImage ("data/veneno.png");
  imgBuena4 = loadImage ("data/pianoviejo.png");

  imgMala1 = loadImage ("data/pastelrosa.png");
  imgMala2 = loadImage ("data/velasclaras.png");
imgMala3 = loadImage ("data/pianorosa.png");

  imgPersonaje = loadImage ("data/gusano.png");
  
}
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
