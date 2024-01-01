import UsefulTerminal from "@/app/utils/UsefulTerminal";
import { terminal } from "terminal-kit";

export default async function foundationsMenu() {
  UsefulTerminal.title("Foundations");

  const userChoice = await terminal.singleColumnMenu([
    "1. Polymorphism",
    "Back",
  ]).promise;

  switch (userChoice.selectedIndex) {
    case 0:
      break;
    case 1:
      return;
    default:
      break;
  }

  await foundationsMenu();
}
