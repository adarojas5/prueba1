function inicializar() {
  estado = 0;

  //cargo los textos:
  textos[1] = "primera pantalla";
  botonA[1] = "Sigueinte";

  textos[2] = "segunda pantalla";
  botonA[2] = "botonA2";
  botonB[2] = "botonB2";

  textos[3] = "tercera pantalla";
  botonA[3] = "botonA3";
  botonB[3] = "botonB3";

  textos[4] = "cuarta pantalla";
  botonA[4] = "Sigueinte";

  textos[5] = "quinta pantalla";
  botonA[5] = "siguiente";

  textos[6] = "sexta pantalla";
  botonA[6] = "siguiente";

  textos[7] = "septima pantalla";
  botonA[7] = "botonA7";
  botonB[7] = "botonB7";

  textos[8] = "octava pantalla";
  botonA[8] = "botonA8";
  botonB[8] = "botonB8";

  textos[9] = "novena pantalla";
  botonA[9] = "siguiente";

  textos[10] = "decima pantalla";
  botonA[10] = "Sigueinte";

  textos[11] = "undecima pantalla";
  botonA[11] = "botonA11";
  botonB[11] = "botonB11";

  textos[12] = "duodecima pantalla";
  botonA[12] = "siguiente";

  textos[13] = "decimotercera pantalla";
  botonA[13] = "Reiniciar";

  textos[14] = "decimocuarta pantalla";
  botonA[14] = "Reiniciar";

  textos[15] = "decimoquinta pantalla";
  botonA[15] = "Reiniciar";
}

function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaInicio() {
  push();
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("El cadáver de la novia", width/2, height/2);

  //botones:
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width/2, height*0.75+60, 200, 40);

  pop();
}

function pantallaCreditos() {
  push();
  image();
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("Créditos aquí", width/2, height/2);

  //botones:
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);

  pop();
}


function pantallaDosBotones( txt_pantalla, txt_btn_A, txt_btn_B ) {
  push();
//  image (imagenes[estado], 0, 0, width, height);
  //background(124, 123, 165);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2+30);

  //botones:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, width/2+200, height*0.75+60, 200, 40);

  pop();
}



function pantallaUnBoton( txt_pantalla, txt_btn_A ) {
  push();
  
  //image (imagenes[estado], 0, 0, width, height);
  background(200);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2+30);

  //boton:
  //A:
  dibujaBoton(txt_btn_A, width/2+200, height*0.75+60, 200, 40);


  pop();
}
