class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  mostrar() {
    fill(100, 200, 100);
    rect(this.x, this.y, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  estaSobre(mx, my) {
    return mx > this.x && mx < this.x + this.ancho && my > this.y && my < this.y + this.alto;
  }
}
