import MovieValueObjectsFactories from '../ValueObjects/factories'
import MovieEntitiesFactories from '../Entities/factories'
import FetcherFactories from '../../Fetcher/factories'

import HTTPMovieRepository from './HTTPMovieRepository'



export default class MovieRepositoriesFactories {
  static httpMovieRepository = ({config}) =>
    new HTTPMovieRepository({
      fetcher: FetcherFactories.httpFetcher(),

      movieListValueObjectFactory:
        MovieValueObjectsFactories.movieListValueObject,
        movieEntityFactory: MovieEntitiesFactories.movieEntity,
      config
    })
}
