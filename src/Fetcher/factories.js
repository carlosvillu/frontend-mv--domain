import axios from 'axios'

import HTTPFetcher from './HTTPFetcher'

export default class FetcherFactories {
  static httpFetcher = () =>
    new HTTPFetcher({
      fetcher: axios
    })
}
