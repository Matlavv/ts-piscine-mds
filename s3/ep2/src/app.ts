import { Circle, Rectangle } from './formes.js';

console.log('============== S3/EP2 ===============');

export default function AfficherSurface(forme: Rectangle | Circle): void {
  if (forme instanceof Rectangle) {
    console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
  } else if (forme instanceof Circle) {
    console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
  }
}

AfficherSurface(new Rectangle(4, 6));
AfficherSurface(new Circle(5));
