import { alerter, logger } from '../../ep1/dist/mon-module/index.js';

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

export interface Cours {
  code: string;
  titre: string;
  niveau: NiveauCours;
}

export interface Professeur {
  id: number;
  nom: string;
  matiere: string;
}

export class GestionCours {
  public etudiants: Etudiant[] = [];
  public cours: Cours[] = [];

  constructor() {
    // cours par défaut
    this.cours.push({
      code: 'code-1',
      titre: 'Programmation 1',
      niveau: NiveauCours.Debutant,
    });
  }

  public inscrireEtudiant(coursCode: string, etudiant: Etudiant): boolean {
    const cours = this.cours.find((c) => c.code === coursCode);
    if (!cours) {
      alerter(`Le cours ${coursCode} n'existe pas`);
      return false;
    }

    const etudiantExistant = this.etudiants.find((e) => e.id === etudiant.id);
    if (etudiantExistant) {
      alerter(`L'étudiant ${etudiant.nom} est déjà inscrit`);
      return false;
    }

    this.etudiants.push(etudiant);
    logger(
      `Étudiant ${etudiant.nom} inscrit avec succès au cours ${cours.titre}`,
    );
    return true;
  }

  public afficherInscriptions(): void {
    if (this.etudiants.length === 0) {
      alerter('Aucune inscription');
      return;
    } else {
      this.etudiants.forEach((etudiant) => {
        logger(`Etudiant ${etudiant.nom} inscrit à ${this.cours[0].titre}`);
      });
    }
  }
}
