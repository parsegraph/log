import {
  getLogger,
} from "./global";

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
