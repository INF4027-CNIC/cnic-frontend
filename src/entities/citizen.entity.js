export class Citizen {
  _id;
  _firstname;
  _lastname;
  _birthday;
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
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get birthday() {
    return this._birthday;
  }

  get birthplace() {
    return this._birthplace;
  }

  get avatar() {
    return this._avatar;
  }

  get sex() {
    return this._sex;
  }

  get height() {
    return this._height;
  }

  get fathername() {
    return this._fathername;
  }

  get mothername() {
    return this._mothername;
  }

  get address() {
    return this._address;
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
