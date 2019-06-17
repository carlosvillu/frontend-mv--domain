export default class SearchMovieUseCase {
  constructor({repository}) {
    this._repository = repository
  }
  execute({keyword}) {
    return this._repository.search({keyword})

}
