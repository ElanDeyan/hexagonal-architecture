import Car from "./ports/Car";

export default function race(car: Car): {
  accelerationHistory: number[];
  brakeHistory: number[];
} {
  const accelerationHistory: number[] = [];

  Array.from({ length: 10 }).forEach(() => {
    car.accelerate();

    accelerationHistory.push(car.actualSpeed);
  });

  const brakeHistory: number[] = [];

  Array.from({ length: 10 }).forEach(() => {
    car.brake();

    brakeHistory.push(car.actualSpeed);
  });

  return { accelerationHistory, brakeHistory };
}
