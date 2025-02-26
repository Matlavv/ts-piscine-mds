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

let leo = new Animal('Leo');
let patrick = new Animal('Patrick');

leo.seDeplacer();
patrick.seDeplacer();
