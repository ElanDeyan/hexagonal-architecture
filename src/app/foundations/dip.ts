import race from "@/core/race";
import UsefulTerminal from "../utils/UsefulTerminal";
import Fusca from "@/core/Fusca";
import Ferrari from "@/core/Ferrari";

export default async function dip() {
    UsefulTerminal.title("Dependency inversion principle, aka DIP")

    const [carTypeIndex] = await UsefulTerminal.select("Choose a car: ", ["Fusca", "Ferrari"])

    const chosenCar = carTypeIndex === 0 ? new Fusca() : new Ferrari()

    const { accelerationHistory, brakeHistory } = race(chosenCar)

    accelerationHistory.forEach((speed) => {
        UsefulTerminal.showKeyValuePair("Velocidade atual: ", speed);
    })

    brakeHistory.forEach((speed) => {
        UsefulTerminal.showKeyValuePair("Velocidade atual: ", speed);
    })

    await UsefulTerminal.waitEnter()
}