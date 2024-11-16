class Juego {
  constructor() {
    this.personaje = new Personaje();
    this.objetos = [];
    this.tiempoTotal = 30;
    this.tiempoRestante = this.tiempoTotal;
    this.ultimoTiempo = millis();
    this.jugando = false;
    this.mostrandoCreditos = false;

    // Botones adaptados
    this.botonInicio = new Boton(width / 2 - 75, height / 2 - 30, 150, 40, "Iniciar Juego", () => {
      this.iniciarJuego();
    }
    );

    this.botonReiniciar = new Boton(width / 2 - 75, height / 2 + 20, 150, 40, "Reiniciar", () => {
      this.reiniciarJuego();
    }
    );

    this.botonCreditos = new Boton(width / 2 - 75, height / 2 + 70, 160, 40, "Instrucciones/Créditos", () => {
      this.mostrandoCreditos = true;
    }
    );

    this.botonVolver = new Boton(width / 2 - 75, height - 60, 150, 40, "Volver", () => {
      this.mostrarPantallaInicio();
    }
    );
  }

  iniciarJuego() {
    this.jugando = true;
    this.personaje = new Personaje();
    this.objetos = [];
    this.tiempoRestante = this.tiempoTotal;
    this.mostrandoCreditos = false;
  }

  reiniciarJuego() {
    this.jugando = true;
    this.personaje = new Personaje();
    this.objetos = [];
    this.tiempoRestante = this.tiempoTotal;
  }

  generarObjetos() {
    if (frameCount % 30 === 0) {
      let tipo = random () > 0.5 ? "bueno" : "malo";

      this.objetos.push(new Objeto(random(width), -50, random(3, 6), tipo));
    }
  }

  actualizar() {
    if (this.jugando) {
      let tiempoActual = millis();
      if (tiempoActual - this.ultimoTiempo >= 1000) {
        this.tiempoRestante--;
        this.ultimoTiempo = tiempoActual;
      }

      if (this.tiempoRestante <= 0) {
        this.jugando = false;
      }
    }

    for (let i = this.objetos.length - 1; i >= 0; i--) {
      this.objetos[i].mostrar();
      this.objetos[i].mover();

      if (this.personaje.verificarColision(this.objetos[i])) {
        this.objetos.splice(i, 1);
      }

      if (this.objetos[i] && this.objetos[i].fueraDePantalla()) {
        this.objetos.splice(i, 1);
      }
    }

    this.personaje.mostrar();
    this.personaje.mover();
    this.mostrarHUD();

    if (this.personaje.vidas <= 0) {
      this.jugando = false;
    }
  }

  mostrarHUD() {
    fill(0);
    textSize(16);
  text(`Vidas:
    $ {
      this.personaje.vidas
    }
    `, 10, 20);
  text(`Puntos:
    $ {
      this.personaje.puntos
    }
    `, 10, 40);
  text(`Tiempo:
    $ {
      this.tiempoRestante
    }
    s`, 10, 60);
  }

  mostrarFinDelJuego() {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    if (this.personaje.vidas <= 0) {
      text("¡Perdiste!", width / 2, height / 2);
    } else if (this.tiempoRestante <= 0 && this.personaje.puntos > 0) {
      text("¡Ganaste!", width / 2, height / 2 -15);
      textSize(24)
        text("Puntos: " + this.personaje.puntos, width / 2, height / 2 + 10);
    } else {
      text("¡Tiempo agotado!", width / 2, height / 2);
    }
    this.botonReiniciar.mostrar();
    this.botonVolver.mostrar();
  }

  mostrarPantallaInicio() {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("¡Bienvenido al Juego!", width / 2, height / 3);
    this.botonInicio.mostrar();
    this.botonCreditos.mostrar();
  }

  mostrarCreditos() {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(0);
    text("Instruccionesy Créditos del Juego", width / 2, height / 4);
    textSize(16);
    text("Desarrollado por: Tu Nombre", width / 2, height / 3);
    text("Música por: Alguien", width / 2, height / 2);
    text("Recoge el pastel adecuado para la boda controlando la bandeja con las flechas", width / 2, height * 2/ 3);

    text("Gracias por jugar", width / 2, height * 2/3+40);

    this.botonVolver.mostrar();
  }

  clic(mx, my) {
    if (!this.jugando) {
      this.botonInicio.clic(mx, my);
      this.botonReiniciar.clic(mx, my);
      this.botonCreditos.clic(mx, my);
      this.botonVolver.clic(mx, my);
      this.botonVolver.clic(mx, my);
    } else if (this.jugando && this.personaje.vidas > 0 && this.tiempoRestante > 0 ) {
      //if (this.jugando === false) {
      this.botonInicio.clic(mx, my);

      this.botonReiniciar.clic(mx, my);
      this.botonCreditos.clic(mx, my);
      this.botonVolver.clic(mx, my);
    }
  }
}
