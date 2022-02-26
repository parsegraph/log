import TreeLog from "./TreeLog";
import NoopTreeLog from "./NoopTreeLog";
import WebsocketTreeLog from "./WebsocketTreeLog";
import Logger from "./Logger";

export { Logger, TreeLog, NoopTreeLog, WebsocketTreeLog };

let loggingEnabled: boolean = false;
const noopLog: TreeLog = new NoopTreeLog();
let globalLog: Logger = noopLog;

export function connectLog(url: string) {
  setLogger(new WebsocketTreeLog(url));
  enableLogging();
}

export function disableLogging() {
  loggingEnabled = false;
}

export function enableLogging() {
  loggingEnabled = true;
}

export function getLogger(): Logger {
  return loggingEnabled ? globalLog : noopLog;
}

export function setLogger(log: Logger) {
  globalLog = log;
}

export default function log(msg?: string, ...args: any) {
  getLogger().log(msg, ...args);
}

export function logEnter(msg?: string, ...args: any) {
  getLogger().logEnter(msg, ...args);
}

export function logEnterc(cat: string, msg?: string, ...args: any) {
  getLogger().logEnterc(cat, msg, ...args);
}

export function logLeave(msg?: string, ...args: any) {
  if (arguments.length === 0) {
    getLogger().logLeave();
    return;
  }
  getLogger().logLeave(msg, ...args);
}

export function logc(cat: string, msg?: string, ...args: any) {
  getLogger().logc(cat, msg, ...args);
}
