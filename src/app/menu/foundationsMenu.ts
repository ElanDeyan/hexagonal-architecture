import UsefulTerminal from "@/app/utils/UsefulTerminal";
import polymorphism from "../foundations/polymorphism";

export default async function foundationsMenu() {
  UsefulTerminal.title("Foundations");

  const [index] = await UsefulTerminal.menu(["1. Polymorphism", "Back"]);

  switch (index) {
    case 0:
        await polymorphism()
        break;
    case 1:
      return;
    default:
      break;
  }

  await foundationsMenu();
}
