import UsefulTerminal from "@/app/utils/UsefulTerminal";
import polymorphism from "../foundations/polymorphism";
import dip from "../foundations/dip";

export default async function foundationsMenu() {
  UsefulTerminal.title("Foundations");

  const [index] = await UsefulTerminal.menu(["1. Polymorphism", "2. Dependency inversion principle", "Back"]);

  switch (index) {
    case 0:
        await polymorphism()
        break;
    case 1:
        await dip()
        break;
    default:
      return;
  }

  await foundationsMenu();
}
