export default class HTTPFetcher {
  constructor({fetcher}) {
    this._fetcher = fetcher
  }
  get(url, params) {
    return this._fetcher.get(url, params)
  }
}
