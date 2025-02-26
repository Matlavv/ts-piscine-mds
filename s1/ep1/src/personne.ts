export function afficherPersonne(personne: Personne) {
  console.log(
    `Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`,
  );
}

afficherPersonne({ name: 'Paul', age: 22 });
