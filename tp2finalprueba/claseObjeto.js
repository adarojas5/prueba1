class Objeto {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.tam = 80;
    this.velocidad = random(2, 5);
    this.bueno = random(1) > 0.5; // 50% buenos, 50% malos
    this.imagen = this.bueno
    ? loadImage (random (["data/velasoscuras.png","data/pasteloscuro.png", "data/veneno.png","data/pianoviejo.png"]))
    : loadImage (random (["data/pastelrosa.png","data/pianorosa.png", "data/velasclaras.png" ]));
  }

  mostrar() {
    image (this.imagen, this.x, this.y, this.tam, this.tam);
    fill(this.bueno ? "green" : "red");
    ellipse(this.x, this.y, 10);
  }

  mover() {
    this.y += this.velocidad;
  }

  toca(personaje) {
    return (
      this.y + this.tam / 2 > personaje.y &&
      this.x > personaje.x &&
      this.x < personaje.x + personaje.tam
    );
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
