/*
COM3 
tpfinalparte1
Sofia Brizuela
Ada Rojas
*/



let sonidoMusica;
let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = [];


function setup() {
  createCanvas(640, 480);
  inicializar();
  sonidoMusica = document.getElementById("bosque"); // Acceder al elemento de audio
}

function draw() {

   
   image(imagenes[estado], 0, 0, width, height);

  dibujaBoton("play", 100, 15, 100, 40);  // Botón de reproducir
  dibujaBoton("stop", 250, 15, 100, 40);  // Botón de detener
  
  if (estado === 0) {
    pantallaInicio();
  } else if ( estado === 100) {
    pantallaCreditos();

    //pregunto por todas las pantallas con 2 botones:
  } else if ( estado===2 || estado===3 || estado===7 || estado===8 || estado===11 ) {
    pantallaDosBotones(textos[estado], botonA[estado], botonB[estado] );

    //pregunto por todas las pantallas con 1 boton:
  } else if ( estado===1 || estado===4 || estado===5 || estado===6 || estado===9 || estado===10 || estado===12 || estado===13 || estado===14 || estado===15 ) {
    pantallaUnBoton(textos[estado], botonA[estado]);
    
  }
   console.log("Mouse X: " + mouseX + ", Mouse Y: " + mouseY);

}

function mousePressed() {
  // Botón de Play
  if (colisionBoton(100, 15, 100, 40)) {
    sonidoMusica.play();  // Reproduce el audio
  }

  // Botón de Stop
  if (colisionBoton(250, 15, 100, 40)) {
    sonidoMusica.pause();  // Pausa el audio
    sonidoMusica.currentTime = 0;  // Reinicia el audio desde el principio
  }
  if (estado === 0) {
    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { 
      
      estado=1;
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { 
     
      estado=100;
    }
  } else if ( estado === 100 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { 
     
      estado=0;
    }
  } else if ( estado===1 ) {
    if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { //A
      //flujo de estado:
      estado=2;
     }
    } else if (estado===2 ) { 
      if ( colisionBoton(width/2-200, height*0.80+60, 200, 40) ) { 
      estado=3;
       } else if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      estado=4;
    }
  } else if ( estado===3 ) {
    if ( colisionBoton(width/2-200, height*0.80+60, 200, 40) ) { 
      
      estado=5;
      } else if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
  
      estado=6;
    }
  } else if ( estado===4 ) {
    if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      estado=8;
    }
  } else if ( estado===5 ) {
  if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
    
      estado=7;
   }
  } else if ( estado===6 ){
  if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      
      estado=7;
   }
  } else if ( estado===7 ){
     if ( colisionBoton(width/2-200, height*0.80+60, 200, 40) ) {
      
      estado=11;
      } else if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) {
      
      estado=12;
      }
  } else if ( estado===8 ){
     if ( colisionBoton(width/2-200, height*0.80+60, 200, 40) ) { 
  
      estado=9;
      } else if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
     
      estado=10;
      }
  } else if ( estado===9 ){
     if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
    
      estado=3;
     }
  } else if ( estado===10 ){
    if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
  
      estado=15;
    }
  } else if ( estado===11 ){
     if ( colisionBoton(width/2-200, height*0.80+60, 200, 40) ) { 
      
      estado=13;
      } else if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      
      estado=14;
      }
  }  else if ( estado===12 ){
      if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      
      estado=10;
      }
  } else if ( estado===13 ){
     if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) { 
      //flujo de estado:
      estado=0;
     }
  } else if ( estado===14 ){
    if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) {
      
      estado=0;
    }
  } else if ( estado===15 ){
        if ( colisionBoton(width/2+200, height*0.80+60, 200, 40) ) {
      estado=0;
    }
  }
  console.log("estado: "+estado);

}

function dibujaBoton(str_, x_, y_, ancho_, alto_) {
  push();
  rectMode(CENTER);
  if (colisionBoton(x_, y_, ancho_, alto_)) {
    fill(55, 55, 85);
  } else {
    fill(100);
  }
  rect(x_, y_, ancho_, alto_);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(20);
  text(str_, x_, y_);
  pop();
}

function colisionBoton(x_, y_, ancho_, alto_) {
  return (mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 &&
    mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2);
}
