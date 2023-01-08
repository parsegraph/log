import { getLogger, isLogModuleSuppressed } from "./global";

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

export function logModule(logModule: string) {
  const isSuppressed = ()=>{
    return isLogModuleSuppressed(logModule);
  }
  return {
    log:(msg?: string, ...args: any)=>{
      if (isSuppressed()) {
        return;
      }
      log(msg, ...args);
    },
    logEnter:(msg?: string, ...args: any)=>{
      if (isSuppressed()) {
        return;
      }
      logEnter(msg, ...args);
    },
    logEnterc:(cat: string, msg?: string, ...args: any)=>{
      if (isSuppressed()) {
        return;
      }
      logEnterc(cat, msg, ...args);
    },
    logLeave:(msg?: string, ...args: any)=>{
      if (isSuppressed()) {
        return;
      }
      logLeave(msg, ...args);
    },
    logc:(cat: string, msg?: string, ...args: any)=>{
      if (isSuppressed()) {
        return;
      }
      logc(cat, msg, ...args);
    }
  }
}
