type NonEmptyArray<T> = [T, ...T[]];

export function premierElement<T>(tableau: NonEmptyArray<T>): T {
  return tableau[0];
}

const numberTab: NonEmptyArray<number> = [1, 2, 3];
// const emptyTab: NonEmptyArray<number> = [];
const stringTab: NonEmptyArray<string> = ['un', 'deux'];
const objectTab: NonEmptyArray<{ name: string }> = [
  { name: 'Alice' },
  { name: 'Bob' },
];

console.log('Number tab :', premierElement(numberTab));
// console.log('Empty tab :', premierElement(emptyTab));
console.log('String tab :', premierElement(stringTab));
console.log('Object tab :', premierElement(objectTab));
