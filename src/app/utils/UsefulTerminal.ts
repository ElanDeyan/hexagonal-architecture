import { terminal } from "terminal-kit";

export default class UsefulTerminal {
  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`);

    const answer = await terminal.singleLineMenu(["Yes", "No"]).promise;

    return answer.selectedIndex === 0;
  }

  static clear() {
    terminal.clear();
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const answer = await terminal.singleColumnMenu(options).promise;

    return [answer.selectedIndex, answer.selectedText];
  }

  static async select(
    text: string,
    options: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text}`);

    const answer = await terminal.singleLineMenu(options).promise;

    return [answer.selectedIndex, answer.selectedText];
  }

  static title(text: string) {
    terminal.clear();

    terminal.magenta(`${text}\n`);
    terminal.magenta(`${"-".repeat(text.length)}\n`);
  }

  static async confirmation (text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`);

    const answer = await terminal.singleLineMenu([
      "Yes",
      "No"
    ]).promise

    return answer.selectedIndex === 0
  }
}
