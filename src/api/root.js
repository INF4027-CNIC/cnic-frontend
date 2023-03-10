import axios from "axios";

const url = "https://cnic.onrender.com";
// const url = "http://192.168.43.3:5000"

export class Fetcher {
  constructor() {
    this._instance = axios.create({
      baseURL: url,
      timeout: 10000000000,
    });
  }

  // Getters
  get instance() {
    return this._instance;
  }

  // Methods
  addToken(token) {
    this._instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }
}

export class Response {
  constructor(data) {
    this._data = data.data || null;
    this._status = data.status;
    this._error = data.error || null;
  }

  // Getters
  get data() {
    return this._data;
  }

  get status() {
    return this._status;
  }

  get error() {
    return this._error;
  }
}
