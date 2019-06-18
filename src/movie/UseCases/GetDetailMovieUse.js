export default class GetDetailMovieUse {
  constructor({repository} = {}) {
    this._repository = repository
  }
  async execute({id}) {
    const movieListValueObject = await this._repository.detail({id})
    return movieListValueObject.toJSON()
  }
}
