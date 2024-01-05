import Car from "@/core/ports/Car";
import UsefulTerminal from "../utils/UsefulTerminal";
import Ferrari from "@/core/Ferrari";
import Fusca from "@/core/Fusca";

export default async function polymorphism() {
  UsefulTerminal.title("Polymorphism");

  const [carTypeIndex] = await UsefulTerminal.select("Choose a car type:", ["Ferrari", "Fusca"])

  const car: Car = carTypeIndex === 0 ? new Ferrari() : new Fusca()

  while (true) {
    UsefulTerminal.clear();

    UsefulTerminal.showKeyValuePair("Max speed: ", `${car.maxSpeed} km/h`)
    UsefulTerminal.showKeyValuePair("Actual speed: ", `${car.actualSpeed} km/h`)

    const [chosenActionIndex] = await UsefulTerminal.select("Do you want to accelerate or brake?", ["Accelerate", "Brake"])

    if(chosenActionIndex === 0) car.accelerate()
    else car.brake()

    const wantsToContinue = await UsefulTerminal.confirmation(
      "Do you want to continue?"
    )
    if (!wantsToContinue) return
  }
}
