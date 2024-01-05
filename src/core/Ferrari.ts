import Car from "./ports/Car";

export default class Ferrari implements Car {

    constructor(
        readonly maxSpeed: number = 324,
        private _actualSpeed: number = 0
    ) {}

    get actualSpeed(): number {
        return this._actualSpeed
    }

    accelerate(): void {
        this._actualSpeed = Math.min(
            this._actualSpeed + 20,
            this.maxSpeed
        )
    }
    brake(): void {
        this._actualSpeed = Math.max(
            this._actualSpeed - 20,
            0
        )
    }
    
}