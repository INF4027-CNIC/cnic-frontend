import { getUrlOfServer } from "utils";
import { generateImage } from "utils";

export class Citizen {
  _id;
  _firstname;
  _lastname;
  _birthday;
  _profession;
  _birthplace;
  _avatar;
  _sex;
  _height;
  _fathername;
  _mothername;
  _address;
  _uniqueId;
  _identificationPost;
  _deliveryDate;
  _expirationDate;
  _numericCode;
  _qrcode;

  constructor(data) {
    this._id = data.id;
    this._firstname = data.firstname;
    this._lastname = data.lastname;
    this._birthday = data.birthDate;
    this._profession = data.profession;
    this._birthplace = data.birthPlace;
    this._avatar = data.avatar || null;
    this._sex = data.gender;
    this._height = data.size;
    this._fathername = data.fathername || null;
    this._mothername = data.mothername || null;
    this._address = data.address;
    this._uniqueId = data.cniCode;
    this._identificationPost = data.identificationPost || "CE02";
    this._deliveryDate = data.cniDeliveryDate;
    this._expirationDate = data.cniExpiryDate;
    this._numericCode = data.code || null;
    this._qrcode = data.code || null;
  }

  // Getters
  get id() {
    return this._id;
  }

  get firstname() {
    return `${this._firstname[0].toUpperCase()}${this._firstname.slice(1)}`;
  }

  get lastname() {
    return `${this._lastname[0].toUpperCase()}${this._lastname.slice(1)}`;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  get birthday() {
    return this._birthday;
  }

  get profession() {
    return `${this._profession[0].toUpperCase()}${this._profession.slice(1)}`;
  }

  get birthplace() {
    return `${this._birthplace[0].toUpperCase()}${this._birthplace.slice(1)}`;
  }

  get avatar() {
    console.log(`${getUrlOfServer()}${this._avatar}`)
    return `${getUrlOfServer()}${this._avatar}`;
  }

  get sex() {
    return this._sex;
  }

  get height() {
    return this._height;
  }

  get fathername() {
    return `${this._fathername[0].toUpperCase()}${this._fathername.slice(1)}`;
  }

  get mothername() {
    return `${this._mothername[0].toUpperCase()}${this._mothername.slice(1)}`;
  }

  get address() {
    return `${this._address[0].toUpperCase()}${this._address.slice(1)}`;
  }

  get uniqueId() {
    return this._uniqueId;
  }

  get identificationPost() {
    return this._identificationPost;
  }

  get deliveryDate() {
    return this._deliveryDate;
  }

  get expirationDate() {
    return this._expirationDate;
  }

  get numericCode() {
    return this._numericCode;
  }

  get qrcode() {
    return this._qrcode;
  }
}
