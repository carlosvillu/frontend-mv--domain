export default class SearchMovieUseCase {
  constructor({repository} = {}) {
    debugger
    this._repository = repository
  }
  async execute({keyword}) { 
    const movieListValueObject = await this._repository.search({keyword})
    return movieListValueObject.toJSON()
  }
}
