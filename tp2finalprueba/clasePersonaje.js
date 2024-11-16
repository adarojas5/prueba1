class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 70;
    this.tam = 80;
    this.image = loadImage ("data/gusano.png");

  }

  mostrar() {
    image (this.image, this.x, this.y, this.tam, this.tam);
  
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
