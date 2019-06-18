import MovieRepositoriesFactories from '../Repositories/factories'
import SearchMovieUseCase from './SearchMovieUseCase'
import GetTrendingMovieUseCase from './GetTrendingMovieUseCase'
import GetDetailMovieUse from './GetDetailMovieUse'

export default class MovieUseCasesFactories {
  static searchMovieUseCase = ({config}) => {
    return new SearchMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
  }

  static getTrendingMovieUseCase = ({config}) => {
    return new GetTrendingMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
  }

  static getDetailMovieUseCase = ({config}) => {
    return new GetDetailMovieUse({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
  }
}
