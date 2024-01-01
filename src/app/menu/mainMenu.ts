import UsefulTerminal from "@/utils/UsefulTerminal";
import { terminal } from "terminal-kit";
import foundationsMenu from "./foundationsMenu";

export default async function mainMenu() {
  UsefulTerminal.title("Main menu");

  const userChoice = await terminal.singleColumnMenu(["1. Foundations", "Exit"])
    .promise;

  switch (userChoice.selectedIndex) {
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
