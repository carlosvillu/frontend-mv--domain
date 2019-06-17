export default class MovieEntity {
  constructor({id, title}) {
    this._id = id
    this._title = title
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title
    }
  }
}
