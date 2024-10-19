function inicializar() {
  estado = 0;
  
  textos[1] = "Victor está comprometido con Victoria, una joven hermosa\n y de buena familia. Hoy es el día más importante de sus vidas:,\n su boda. Sin embargo, Victor no puede evitar sentir\n una profunda inquietud. Ha estado practicando sus votos,\n pero no se siente preparado para lo que le espera.";
  botonA[1] = "Siguiente";
  
  textos[2] = "Con la boda acercándose rápidamente, Victor se da cuenta\n de que necesita calmarse y recitar sus votos una vez más.\n El bosque, parece el lugar perfecto para despejar su mente.\n Sin embargo, también está el temor de perder el tiempo y\n llegar tarde a la ceremonia.";
  botonA[2] = "Ir al bosque";
  botonB[2] = "Ir a la iglesia";

  textos[3] = "Victor se adentra en el bosque mientras susurra nervioso las palabras\n que quiere decir en la ceremonia. De repente, un suave susurro\n se mezcla con sus pensamientos. Es una voz lejana, extrañamente\n melódica, pero también escalofriante. Victor se detiene,\n su corazón late más rápido.";
  botonA[3] = "Ignorar la voz";
  botonB[3] = "Huir";
 
  textos[4] = "A pesar de sus dudas, Victor decide no perder más tiempo\n y va directamente a la iglesia. Al llegar, los invitados\n ya están esperando y Victoria luce radiante. Pero cuando llega\n el momento crucial de pronunciar sus votos, las palabras\n parecen desvanecerse en su mente.";
  botonA[4] = "Siguiente";
 
  textos[5] = "Victor decide que la extraña voz es solo fruto\n de su nerviosismo y sigue recitando sus votos. Al terminar\n de decir sus votos, coloca el anillo en una rama con forma de dedo,\n una figura aparece entre las sombras. Es Emily, una novia\n vestida de blanco, con ojos tristes y un brillo fantasmal.";
  botonA[5] = "Siguiente";

  textos[6] = "Asustado por la extraña voz, Victor se aleja rápidamente. Encuentra\n otro rincón del bosque y, respirando hondo, intenta concentrarse\n en sus votos. Pero al colocar su anillo en una rama, una figura\n blanca emerge. Es una joven mujer, su vestido de novia sucio\n y desgastado. Sus ojos reflejan una tristeza infinita.";
  botonA[6] = "Siguiente";

  textos[7] = "Emily se acerca con delicadeza. Le cuenta a Victor su historia\n de cómo murió traicionada por su prometido. Luego,\n lo mira con esperanza y le pide que la acompañe al inframundo,\n un lugar donde podrían estar juntos para siempre.";
  botonA[7] = "Seguir a Emily";
  botonB[7] = "Volver a la boda";

  textos[8] = "De pie en el altar, Victor siente el peso de las miradas de los\n invitados. Victoria espera que pronuncie sus votos,\n pero las palabras no llegan. La presión aumenta, su corazón\n late frenéticamente, y todo a su alrededor comienza\n a desmoronarse en su mente.";
  botonA[8] = "Huir al bosque";
  botonB[8] = "Quedarse en la boda";

  textos[9] = "Victor, incapaz de soportar la presión, huye del altar.\n Sus pasos lo guían de vuelta al bosque, donde espera encontrar\n calma para practicar sus votos y aclarar su mente.";
  botonA[9] = "Siguiente";

  textos[10] = "Victor sigue en el altar, nervioso y temblando.\n Aunque las palabras no llegan, el sacerdote decide continuar\n la ceremonia. Los invitados susurran entre ellos, y Victoria lo mira\n con preocupación, pero la boda avanza a pesar de todo.";
  botonA[10] = "Siguiente";

  textos[11] = "Victor sigue a Emily al inframundo, un lugar oscuro pero lleno\n de una extraña belleza. Allí, entre sombras y recuerdos,\n Emily le toma las manos y le pide que se case con ella,\n ofreciéndole una eternidad juntos lejos del mundo de los vivos.";
  botonA[11] = "Aceptar y casarse";
  botonB[11] = "Rechazar y volver";

  textos[12] = " Con dolor en sus ojos, Victor rechaza la propuesta de Emily.\n Aunque le duele dejarla, sabe que su lugar está en el mundo\n de los vivos. Se despide de Emily y vuelve hacia la boda, aunque\n algo en su interior le dice que quizás sea demasiado tarde.";
  botonA[12] = "Siguiente";

  textos[13] = "Victor, conmovido por la tristeza de Emily, acepta su propuesta.\n Juntos, se casan en el inframundo, un lugar donde el tiempo\n parece haberse detenido. Allí, Victor y Emily encontrarán\n una eternidad en compañía, lejos del mundo de los vivos.";
  botonA[13] = "Reiniciar";

  textos[14] = "Victor regresa al mundo de los vivos, pero cuando\n llega a la iglesia, todo ha cambiado. Los invitados se han ido,\n la boda ha sido cancelada y Victoria ha partido. Victor se\n queda solo, el eco de su decisión resonando en su mente.";
  botonA[14] = "Reiniciar";

  textos[15] = "La ceremonia finalmente concluye. A pesar de los nervios\n y los contratiempos, Victor logra pronunciar sus votos, y Victoria,\n con una sonrisa llena de amor, lo acepta como su esposo.\n La boda termina con una alegre celebración, y ambos comienzan\n su vida juntos, dejando atrás cualquier duda o incertidumbre.";
  botonA[15] = "Reiniciar";
 
}


function preload() {
  imagenes[0] = loadImage('data/imagen_00.png');
  imagenes[1] = loadImage('data/imagen_01.png'); 
  imagenes[2] = loadImage('data/imagen_02.png'); 
  imagenes[3] = loadImage('data/imagen_03.png');
  imagenes[4] = loadImage('data/imagen_04.png');
  imagenes[5] = loadImage('data/imagen_05.png');
  imagenes[6] = loadImage('data/imagen_06.png');
  imagenes[7] = loadImage('data/imagen_07.png');
  imagenes[8] = loadImage('data/imagen_08.png');
  imagenes[9] = loadImage('data/imagen_09.png');
  imagenes[10] = loadImage('data/imagen_10.png');
  imagenes[11] = loadImage('data/imagen_11.png');
  imagenes[12] = loadImage('data/imagen_12.png');
  imagenes[13] = loadImage('data/imagen_13.png');
  imagenes[14] = loadImage('data/imagen_14.png');
  imagenes[15] = loadImage('data/imagen_15.png');
  imagenes[100] = loadImage('data/imagen_16.png'); 

}


function dibujaBoton(txt, x, y, w, h ) {
  push();
  rectMode(CENTER);
  if ( colisionBoton( x, y, w, h ) ) {
    fill(55, 55, 85);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
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
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Créditos aquí", width/2, height/2);

  //botones:
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);

  pop();
}


function pantallaDosBotones( txt_pantalla , txt_btn_A , txt_btn_B ) {
 
    fill(0, 0, 0, 150); // Color negro con 150 de opacidad
  rect(0, height / 2 + 20, width, height / 2 );
  push();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(txt_pantalla, width/2, height/2+60);
  
  //botones:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.80+60, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, width/2+200, height*0.80+60, 200, 40);

  pop();
}



function pantallaUnBoton( txt_pantalla , txt_btn_A ) {
  
   fill(0, 0, 0, 150); // Color negro con 150 de opacidad
  rect(0, height / 2 + 20, width, height / 2);
  
  push();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(txt_pantalla, width/2, height/2+60);

  //boton:
  //A:
  dibujaBoton(txt_btn_A, width/2+200, height*0.80+60, 200, 40);


  pop();
}
