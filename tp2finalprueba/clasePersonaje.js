class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 70;
    this.tam = 50;
  }

  mostrar() {
    image (imgPersonaje, this.x, this.y, this.tam, this.tam);
   // fill(0, 0, 255);
   // rect(this.x, this.y, this.tam, 10);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    this.x = constrain(this.x, 0, width - this.tam);
  }
}
