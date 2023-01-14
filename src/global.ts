import TreeLog from "./TreeLog";
import NoopTreeLog from "./NoopTreeLog";
import WebsocketTreeLog from "./WebsocketTreeLog";
import Logger from "./Logger";
import CallbackTreeLog from "./CallbackTreeLog";

let loggingEnabled: boolean = false;
const noopLog: TreeLog = new NoopTreeLog();
let globalLog: Logger = noopLog;

export function connectLog(url: string) {
  setLogger(new WebsocketTreeLog(url));
  enableLogging();
}

export function setLogSink(cb: (msg: string) => void) {
  setLogger(new CallbackTreeLog(cb));
}

export function disableLogging() {
  loggingEnabled = false;
}

export function enableLogging() {
  loggingEnabled = true;
}

const suppressedLogModules: { [logModule: string]: boolean } = {};

export function suppressLogModule(logModule: string) {
  suppressedLogModules[logModule] = true;
}

export function unsuppressLogModule(logModule: string) {
  suppressedLogModules[logModule] = false;
}

export function isLogModuleSuppressed(logModule: string) {
  return !loggingEnabled || suppressedLogModules[logModule] === true;
}

export function getLogger(): Logger {
  return loggingEnabled ? globalLog : noopLog;
}

export function setLogger(log: Logger) {
  globalLog = log;
}
