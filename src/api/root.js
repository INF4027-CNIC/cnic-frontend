import axios from "axios";

export class Fetcher {
  constructor() {
    this._instance = axios.create({
      // baseURL: "http://cnic.onrender.com:5000",
      baseURL: "http://localhost:5000",
      timeout: 10000,
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
