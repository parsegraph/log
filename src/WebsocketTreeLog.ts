import TreeLog from "./TreeLog";

const MAX_RETRIES = 3;

export default class WebsocketTreeLog extends TreeLog {
  _ws: WebSocket;
  _connected: boolean;

  _url: string;

  _connectionRetries: number;

  constructor(url: string) {
    super();
    this._url = url;
    this._connectionRetries = 0;
    this._connected = false;
  }

  connecting() {
    return this._ws && !this._connected;
  }

  connected() {
    return this._ws && this._connected;
  }

  reconnect() {
    if (this.hasFailed() || this.connecting() || this.connected()) {
      return;
    }
    if (this._connectionRetries < MAX_RETRIES) {
      this.connect();
    } else {
      this.fail();
    }
  }

  disconnect() {
    if (!this._ws) {
      return;
    }
    try {
      this._ws.close();
    } finally {
      this._ws = null;
      this._connected = false;
    }
  }

  lostConnection() {
    if (!this.hasBuffer()) {
      this.clear();
    }
    this._connected = false;
    this._ws.onclose = null;
    this._ws.onerror = null;
    this._ws = null;
    if (!this.isEmpty()) {
      this.reconnect();
    }
  }

  connect() {
    this.disconnect();
    this._ws = new WebSocket(this._url);
    ++this._connectionRetries;
    this._ws.onopen = () => {
      this._connected = true;
      this._connectionRetries = 0;
      this.flush();
    };
    this._ws.onclose = () => {
      this.lostConnection();
    };
    this._ws.onerror = () => {
      this.lostConnection();
    };
  }

  writeLog(str: string) {
    if (this.connected()) {
      this._ws.send(str);
      return;
    } else {
      this.reconnect();
    }
    super.writeLog(str);
  }
}
