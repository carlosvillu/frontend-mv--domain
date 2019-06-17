import MovieRepository from './MovieRepository'

export default class HTTPMovieRepository extends MovieRepository {
  constructor({fetcher, config}) {
    this._fetcher = fetcher
    this._config = config
  }

  async search({keyword}) {
    const API_HOST = this._config.get('API_HOST')
    const API_KEY = this._config.get('API_KEY')

    const response = await this._fetcher.get(
      `${API_HOST}/search/movie?api_key=${API_KEY}&query=${keyword}`
    )
  }
}
