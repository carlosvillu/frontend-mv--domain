import MovieRepositoriesFactories from '../Repositories/factories'

import SearchMovieUseCase from './SearchMovieUseCase'

export default class MovieUseCasesFactories {
  static searchMovieUseCase = ({config}) =>
    new SearchMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
}
