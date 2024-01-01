import UsefulTerminal from "../utils/UsefulTerminal";

export default async function polymorphism() {
  UsefulTerminal.title("Polymorphism");

  const carType = await UsefulTerminal.select("Choose a car type:", ["Ferrari", "Fusca"])

  while (true) {
    UsefulTerminal.clear();

    const wantsToContinue = await UsefulTerminal.confirmation(
      "Do you want to continue?"
    );

    if (!wantsToContinue) return;
  }
}
