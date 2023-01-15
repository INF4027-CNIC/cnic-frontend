export class Admin {
  _id;
  _username;
  _password;
  _email;
  _role;
  _data;

  constructor(data) {
    this._id = data.id;
    this._username = data.username;
    this._password = data.password;
    this._email = data.email;
    this._role = data.role;

    // User data
    this._data = data.data || null;
  }

  // Getters
  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get email() {
    return this._email;
  }

  get role() {
    return this._role;
  }

  get data() {
    return this._data;
  }
}