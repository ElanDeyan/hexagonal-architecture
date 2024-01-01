import UsefulTerminal from "@/app/utils/UsefulTerminal";
import foundationsMenu from "./foundationsMenu";

export default async function mainMenu() {
  UsefulTerminal.title("Main menu");

  const [index] = await UsefulTerminal.menu(["1. Foundations", "Exit"]);

  switch (index) {
    case 0:
      await foundationsMenu();
      break;
    case 1:
      process.exit(0);
    default:
      break;
  }

  mainMenu();
}
