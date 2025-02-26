import {
  GestionCours,
  Etudiant,
  Cours,
  Professeur,
  NiveauCours,
} from './gestionCours.js';

console.log('============== S6/EP2 ===============');

let cours1: Cours = {
  code: 'code-1',
  titre: 'Programmation 1',
  niveau: NiveauCours.Debutant,
};

let etudiant1: Etudiant = {
  id: 1,
  nom: 'Luffy',
  niveau: NiveauCours.Debutant,
};

let etudiant2: Etudiant = {
  id: 2,
  nom: 'Zoro',
  niveau: NiveauCours.Debutant,
};

let gestionCours: GestionCours = new GestionCours();
console.log(gestionCours.inscrireEtudiant(cours1.code, etudiant1));
console.log(gestionCours.inscrireEtudiant(cours1.code, etudiant2));
console.log(gestionCours.afficherInscriptions());
