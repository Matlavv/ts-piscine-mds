type NonEmptyArray<T> = [T, ...T[]];

interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const maVoiture: Voiture = {
  marque: 'Ford',
  modele: 'Mustang',
  annee: 2020,
};

console.log(getProperty(maVoiture, 'marque'));
console.log(getProperty(maVoiture, 'modele'));
console.log(getProperty(maVoiture, 'annee'));

console.log(
  'erreur si le type n’existe pas : src/generics.ts:23:36 - error TS2345: Argument of type couleur is not assignable to parameter of type keyof Voiture',
);

//console.log(getProperty(maVoiture, 'couleur'));
