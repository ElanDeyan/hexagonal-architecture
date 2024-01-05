import Car from "./ports/Car";

export default class Fusca implements Car {
  constructor(
    readonly maxSpeed: number = 140,
    private _actualSpeed: number = 0
  ) {}

  get actualSpeed(): number {
    return this._actualSpeed;
  }

  accelerate(): void {
    this._actualSpeed = Math.min(this._actualSpeed + 5, this.maxSpeed);
  }
  brake(): void {
    this._actualSpeed = Math.max(this._actualSpeed - 5, 0);
  }
}
