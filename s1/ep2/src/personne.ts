export function afficherPersonneAvancee(personne: Personne) {
  if (!personne.adress) {
    console.log(
      `Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`,
    );
  } else {
    console.log(
      `Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans. J'habite au ${personne.adress?.rue} à ${personne.adress?.ville}`,
    );
  }
}

const personne1 = {
  id: 1,
  name: 'Jean',
  age: 22,
  adress: { rue: 'Rue des cramptés', ville: 'Roubaix' },
};

const personne2 = {
  id: 2,
  name: 'Julie',
  age: 28,
};

afficherPersonneAvancee(personne1);
afficherPersonneAvancee(personne2);
