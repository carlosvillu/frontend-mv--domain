export default class MovieListValueObject {
  constructor({listEntities}) {
    this._listEntities = listEntities
  }

  toJSON() {
    return {
      list: this._listEntities.map(entity => entity.toJSON())
    }
  }
}
