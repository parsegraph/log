import TreeLog from "./TreeLog";
import NoopTreeLog from "./NoopTreeLog";
import WebsocketTreeLog from "./WebsocketTreeLog";
import Logger from "./Logger";
import CallbackTreeLog from "./CallbackTreeLog";

import {
  connectLog,
  disableLogging,
  enableLogging,
  getLogger,
  setLogger,
  setLogSink,
  suppressLogModule,
  unsuppressLogModule,
  isLogModuleSuppressed
} from "./global";

import log, { logEnter, logEnterc, logLeave, logc, logModule } from "./utility";

export default log;

export {
  logEnter,
  logEnterc,
  logLeave,
  logc,
  logModule,
  Logger,
  CallbackTreeLog,
  TreeLog,
  NoopTreeLog,
  WebsocketTreeLog,
  connectLog,
  disableLogging,
  enableLogging,
  setLogSink,
  getLogger,
  setLogger,
  suppressLogModule,
  unsuppressLogModule,
  isLogModuleSuppressed
};
