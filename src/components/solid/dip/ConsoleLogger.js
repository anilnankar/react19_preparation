// consoleLogger.js - Implements the logging interface
import { Logger } from "./Logger";

export class ConsoleLogger extends Logger {
  log(message) {
    console.log("Console Logger:", message);
  }
}
