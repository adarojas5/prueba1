class Objeto {
  constructor(x, y, velocidad, tipo) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tipo = tipo;
    this.tamano = 50;
    this.imagen = this.tipo ==="bueno"? imgBuena : imgMalo
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.tamano);
   
  }

  mover() {
    this.y += this.velocidad;
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
