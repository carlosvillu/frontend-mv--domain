export default class GetDetailMovieUse {
  constructor({repository} = {}) {
    debugger
    this._repository = repository
  }
  async execute({id}) { 
    const movieListValueObject = await this._repository.detail({id})
    return movieListValueObject.toJSON()
  }
}
