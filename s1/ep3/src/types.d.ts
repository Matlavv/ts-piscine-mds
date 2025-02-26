interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

type PersonnePro = Employe | Client;
