export enum NiveauCours {
  Debutant,
  Intermediaire,
  Avance,
}

export interface Etudiant {
  id: number;
  nom: string;
  niveau: NiveauCours;
}

interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours;
}

interface Professeur {
  id: number;
  nom: string;
  matiere: string;
}
