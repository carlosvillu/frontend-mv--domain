export default class GetTrendingMovieUseCase {
  constructor({repository} = {}) {
    debugger
    this._repository = repository
  }
  async execute() { 
    const movieListValueObject = await this._repository.trending()
    return movieListValueObject.toJSON()
  }
}
