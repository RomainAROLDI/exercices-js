export class Film {
  _id;
  nom;
  genre;
  pays;
  date;
  synopsis;

  constructor(id, nom, genre, pays, date, syno) {
    this._id = id;
    this.nom = nom;
    this.genre = genre;
    this.pays = pays;
    this.date = date;
    this.synopsis = syno;
  }

  get _id() {
    return this.__id;
  }

  set _id(tmp) {
    this.__id = tmp;
  }
  
  get nom() {
    return this._nom;
  }

  set nom(tmp) {
    this._nom = tmp;
  }

  get genre() {
    return this._genre;
  }

  set genre(tmp) {
    this._genre = tmp;
  }

  get pays() {
    return this._pays;
  }

  set pays(tmp) {
    this._pays = tmp;
  }

  get date() {
    return this._date;
  }

  set date(tmp) {
    this._date = tmp;
  }

  get synopsis() {
    return this._synopsis;
  }

  set synopsis(tmp) {
    this._synopsis = tmp;
  }

}