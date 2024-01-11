import UsefulTerminal from "@/app/utils/UsefulTerminal";
import registerUser from "../user/registerUser";

export default async function userMenu() {
  UsefulTerminal.title("Foundations");

  const [index] = await UsefulTerminal.menu(["1. Registrar usuário", "Back"]);

  switch (index) {
    case 0:
        await registerUser()
        break;
    default:
      return;
  }

  await userMenu();
}
