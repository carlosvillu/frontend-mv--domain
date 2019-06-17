import Config from './Config'
import MovieUseCasesFactories from './movie/UseCases/factories'

const config = new Config()

const useCases = {
  search_movies_use_case: MovieUseCasesFactories.searchMovieUseCase({config})
}

export default class Domain {
  get(useCase) {
    return useCases[useCase]
  }
}
