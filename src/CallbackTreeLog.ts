import TreeLog from "./TreeLog";

export default class CallbackTreeLog extends TreeLog {
  _cb: (msg: string) => void;

  constructor(cb: (msg: string) => void) {
    super();
    this._cb = cb;
  }

  set(func: (msg: string) => void) {
    this._cb = func;
  }

  writeLog(msg: string) {
    if (this._cb) {
      this._cb(msg);
    }
  }
}
