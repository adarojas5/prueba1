class Boton {
  constructor(x, y, ancho, alto, texto, accion) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.accion = accion; // Función a ejecutar al hacer clic
  }

  mostrar() {
    fill(200);
    stroke(0);
    rect(this.x, this.y, this.ancho, this.alto, 10);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  clic(mx, my) {
    if (
      mx > this.x &&
      mx < this.x + this.ancho &&
      my > this.y &&
      my < this.y + this.alto
    ) {
      this.accion(); // Ejecutar la acción del botón
      return true;
    }
    return false;
  }
}
