interface Personne {
  readonly id: number;
  name: string;
  age: number;
  adress?: {
    rue: string;
    ville: string;
  };
}
