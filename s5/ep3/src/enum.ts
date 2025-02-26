enum Direction {
  'Nord',
  'Sud',
  'Est',
  'Ouest',
}

export function vecteurDirection(direction: Direction): [number, number] {
  switch (direction) {
    case Direction.Nord:
      return [0, 1];
    case Direction.Sud:
      return [0, -1];
    case Direction.Est:
      return [1, 0];
    case Direction.Ouest:
      return [-1, 0];
  }
}

function deplacer(
  point: [number, number],
  direction: Direction,
): [number, number] {
  const [dx, dy] = vecteurDirection(direction);
  return [point[0] + dx, point[1] + dy];
}

console.log('Début : 5 5 direction : Nord', deplacer([5, 5], Direction.Nord));
console.log('Début : 5 5 direction : Sud', deplacer([5, 5], Direction.Sud));
console.log('Début : 5 5 direction : Est', deplacer([5, 5], Direction.Est));
console.log('Début : 5 5 direction : Ouest', deplacer([5, 5], Direction.Ouest));
