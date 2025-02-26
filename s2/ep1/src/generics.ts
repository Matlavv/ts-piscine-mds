export function premierElement<T>(tableau: T[]): T {
  return tableau[0];
}

const numberTab = [1, 2, 3];

const stringTab = ['un', 'deux'];

const objectTab = [{ name: 'Alice' }, { name: 'Bob' }];

console.log('Number tab :', premierElement(numberTab));
console.log('String tab :', premierElement(stringTab));
console.log('Object tab :', premierElement(objectTab));
