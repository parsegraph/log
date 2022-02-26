export default interface Logger {
  logEnter(msg?: string, ...args: any):void;
  logEnterc(cat: string, msg?: string, ...args: any):void;
  logLeave(msg?: string, ...args: any):void;
  log(msg: string, ...args: any):void;
  logc(cat: string, msg: string, ...args: any):void;
}
