import { terminal } from "terminal-kit";

export default class UsefulTerminal {
  static title(text: string) {
    terminal.clear();

    terminal.magenta(`${text}\n`);
    terminal.magenta(`${"-".repeat(text.length)}\n`);
  }

  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`);

    const answer = await terminal.singleLineMenu(["Yes", "No"]).promise;

    return answer.selectedIndex === 0;
  }
}
