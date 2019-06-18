import Config from './Config'
import MovieUseCasesFactories from './movie/UseCases/factories'

const config = new Config()

export default class Domain {
  useCases = {
    search_movies_use_case: MovieUseCasesFactories.searchMovieUseCase({config}),
    get_trending_movies_use_case: MovieUseCasesFactories.getTrendingMovieUseCase(
      {config}
    ),
    get_detail_movies_use_case: MovieUseCasesFactories.getDetailMovieUseCase({
      config
    })
  }
  get(useCase) {
    return this.useCases[useCase]
  }
}
