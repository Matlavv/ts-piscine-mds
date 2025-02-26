export class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculerSurface(): number {
    return this.width * this.height;
  }
}

export class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public calculerSurface(): number {
    return Math.PI * this.radius * this.radius;
  }
}
