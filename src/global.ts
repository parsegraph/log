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

const unsuppressedLogModules:{[logModule:string]:boolean} = {};

export function suppressLogModule(logModule: string) {
  unsuppressedLogModules[logModule] = false;
}

export function unsuppressLogModule(logModule: string) {
  unsuppressedLogModules[logModule] = true;
}

export function isLogModuleSuppressed(logModule: string) {
  return unsuppressedLogModules[logModule] !== true;
}

export function getLogger(): Logger {
  return loggingEnabled ? globalLog : noopLog;
}

export function setLogger(log: Logger) {
  globalLog = log;
}
