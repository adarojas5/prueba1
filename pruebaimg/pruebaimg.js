let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = [];

function preload(){ //bucle
for (let i = 0; i <= 15; i ++){
  imagenes [i] = loadImage ("data/pantalla" + i + '.png');
  console.log("image: "+ i+ 'cargada');
}

}

function setup() {
createCanvas(640, 480);
  inicializar();
}


function draw() {
  background (0);
  if (estado >= 0 && estado <= 15){
    image (imagenes [estado], 0, 0, width, height)
    
  if (estado === 0) {
    pantallaInicio();
  } else if ( estado === 100) {
    pantallaCreditos();
  }
    //pregunto por todas las pantallas con 2 botones:
  } else if ( estado===2 || estado===3 || estado===7 || estado===8 || estado===11 ) {
    pantallaDosBotones(textos[estado], botonA[estado], botonB[estado], imagenes [estado]);

    //pregunto por todas las pantallas con 1 boton:
  } else if ( estado===1 || estado===4 || estado===5 || estado===6 || estado===9 || estado===10 || estado===12 || estado===13 || estado===14 || estado===15 ) {
    pantallaUnBoton(textos[estado], botonA[estado], imagenes [estado]);
  }
}


function mousePressed() {
   if (estado === 0) {
    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { //EMPEZAR
      //flujo de estado:
      estado=1;
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=100;
    }
  } else if ( estado === 100 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=0;
    }
  } else if ( estado===1 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=2;
     }
    } else if (estado===2 ) { 
      if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=3;
       } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=4;
    }
  } else if ( estado===3 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=5;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=6;
    }
  } else if ( estado===4 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=8;
    }
  } else if ( estado===5 ) {
  if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=7;
   }
  } else if ( estado===6 ){
  if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=7;
   }
  } else if ( estado===7 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=11;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=12;
      }
  } else if ( estado===8 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=9;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=10;
      }
  } else if ( estado===9 ){
     if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=3;
     }
  } else if ( estado===10 ){
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=15;
    }
  } else if ( estado===11 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=13;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=14;
      }
  }  else if ( estado===12 ){
      if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=10;
      }
  } else if ( estado===13 ){
     if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
     }
  } else if ( estado===14 ){
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }
  } else if ( estado===15 ){
        if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }
  }
  console.log("estado: "+estado);
}
