export default interface Car {
    readonly maxSpeed: number
    actualSpeed: number

    accelerate(): void
    brake(): void
}