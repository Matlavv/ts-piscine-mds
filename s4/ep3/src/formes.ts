export abstract class Forme {
  abstract calculerSurface(): number;
}

export class Rectangle extends Forme {
  public largeur: number;
  public hauteur: number;
  constructor(largeur: number, hauteur: number) {
    super();
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

export class Cercle extends Forme {
  public rayon: number;
  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  calculerSurface(): number {
    return Math.PI * this.rayon * this.rayon;
  }
}

new Rectangle(10, 20);
new Cercle(5);

console.log('Rectangle :', new Rectangle(10, 20).calculerSurface());
console.log('Cercle :', new Cercle(5).calculerSurface());
