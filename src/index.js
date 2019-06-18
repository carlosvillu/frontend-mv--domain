import Config from './Config'
import MovieUseCasesFactories from './movie/UseCases/factories'

const config = new Config()

export default class Domain {
  useCases = {
    search_movies_use_case: MovieUseCasesFactories.searchMovieUseCase({config})
  }
  get(useCase) {
    return this.useCases[useCase]
  }
}
