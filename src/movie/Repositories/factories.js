import FetcherFactories from '../../Fetcher/factories'

import HTTPMovieRepository from './HTTPMovieRepository'

export default class MovieRepositoriesFactories {
  static httpMovieRepository = ({config}) =>
    new HTTPMovieRepository({
      fetcher: FetcherFactories.httpFetcher(),
      config
    })
}
