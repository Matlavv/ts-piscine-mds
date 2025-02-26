export interface IAnimal {
  name: string;
  seDeplacer(): void;
}

export class Animal implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  seDeplacer(): void {
    console.log(`L'animal ${this.name} se deplace`);
  }
}

export class Chien extends Animal {
  seDeplacer(): void {
    console.log(`Le chien ${this.name} court.`);
  }
}

export class Chat extends Animal {
  seDeplacer(): void {
    console.log(`Le chat ${this.name} saute.`);
  }
}

export function faireSeDeplacer(animaux: IAnimal[]) {
  animaux.forEach((animal) => {
    animal.seDeplacer();
  });
}

const animaux = [new Chien('Léo'), new Chat('Patrick')];

faireSeDeplacer(animaux);

const animaux2 = [new Animal('Leo'), new Animal('Patrick')];

faireSeDeplacer(animaux2);
