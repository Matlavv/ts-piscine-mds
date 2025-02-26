export interface vehicule {
  marque: string;
  annee: number;
}

export function isVehicule(obj: any): obj is vehicule {
  if (
    'marque' in obj &&
    typeof obj.marque === 'string' &&
    'annee' in obj &&
    typeof obj.annee === 'number'
  ) {
    return true;
  }
  return false;
}

export function afficherVehicule(obj: any) {
  console.log(obj);
  if (isVehicule(obj)) {
    console.log(
      `Le véhicule ${obj.marque} de l'annee ${obj.annee} est valide.`,
    );
  } else {
    console.log('Objet invalide pour un véhicule.');
  }
}

afficherVehicule({ marque: 'Ford', annee: 2024 });
afficherVehicule({ marque: 3, annee: '2024' });
afficherVehicule({ marque: 4, annee: 2024 });
