import UsefulTerminal from "@/app/utils/UsefulTerminal";
import foundationsMenu from "./foundationsMenu";
import userMenu from "./userMenu";

export default async function mainMenu() {
  UsefulTerminal.title("Main menu");

  const [index] = await UsefulTerminal.menu(["1. Foundations", "2. User", "Exit"]);

  switch (index) {
    case 0:
      await foundationsMenu();
      break;
    case 1:
      await userMenu();
      break;
    default:
      process.exit(0);
  }

  mainMenu();
}
