export function traiterValeur(params: number | string) {
  if (typeof params === 'string') {
    return params.length;
  } else {
    return params * 2;
  }
}

console.log('Number', traiterValeur(5));
console.log('String', traiterValeur('Hello'));
