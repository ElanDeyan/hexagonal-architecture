import race from "@/core/race";
import UsefulTerminal from "../utils/UsefulTerminal";
import Fusca from "@/core/Fusca";
import Ferrari from "@/core/Ferrari";
import Car from "@/core/ports/Car";

export default async function dip() {
  UsefulTerminal.clear();

  UsefulTerminal.title("Dependency inversion principle, aka DIP");

  const [carTypeIndex] = await UsefulTerminal.select("Choose a car: ", [
    "Fusca",
    "Ferrari",
  ]);

  let chosenCar: Car;

  switch (carTypeIndex) {
    case 0:
      chosenCar = new Fusca();
      break;
    case 1:
      chosenCar = new Ferrari();
      break;
    default:
      chosenCar = new Ferrari();
      break;
  }

  race(chosenCar, UsefulTerminal.print);

  await UsefulTerminal.waitEnter();
}
