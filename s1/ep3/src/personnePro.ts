function afficherInfoProfessionnelle(personne: PersonnePro) {
  if ('poste' in personne) {
    console.log(`Employé : ${personne.nom} travaille comme ${personne.poste}.`);
  } else {
    console.log(
      `Client : ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`,
    );
  }
}

const employe1: PersonnePro = { nom: 'Alice', poste: 'Ingenieur' };
const client1: PersonnePro = { nom: 'Bob', entreprise: 'Google' };

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);
