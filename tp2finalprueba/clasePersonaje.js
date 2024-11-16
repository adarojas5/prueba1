class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.vidas = 3;
    this.puntos = 0;
    this.velocidad = 5;
    this.ancho = 50;
    this.alto = 20;
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = max(0, this.x - this.velocidad);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = min(width - this.ancho, this.x + this.velocidad);
    }
  }

  verificarColision(objeto) {
    if (
      this.x < objeto.x + objeto.tamano &&
      this.x + this.ancho > objeto.x &&
      this.y < objeto.y + objeto.tamano &&
      this.y + this.alto > objeto.y
    ) {
      if (objeto.tipo === "bueno") {
        this.puntos++;
      } else {
        this.vidas--;
      }
      return true;
    }
    return false;
  }
}
