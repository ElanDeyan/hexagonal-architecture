import { terminal } from "terminal-kit";

export default class UsefulTerminal {
  static title(text: string) {
    terminal.clear();

    terminal.magenta(`${text}\n`);
    terminal.magenta(`${"-".repeat(text.length)}\n`);
  }
}
