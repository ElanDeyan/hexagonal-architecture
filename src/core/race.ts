import Car from "./ports/Car";

export default function race(
  car: Car,
  logger: (str: string) => void = console.log
) {
  const numberOfLoops = 10;

  Array.from({ length: numberOfLoops }).forEach(() => {
    car.accelerate();
    logger(`Velocidade atual: ${car.actualSpeed} km/h`);
  });

  Array.from({ length: numberOfLoops }).forEach(() => {
    car.brake();
    logger(`Velocidade atual: ${car.actualSpeed} km/h`);
  });
}
