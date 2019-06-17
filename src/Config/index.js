export default class Config {
  constructor(){
    this._config = {
      API_HOST: 'https://api.themoviedb.org/3',
      API_KEY: '73b32ac270598ba6ec4f69477e773e28'
    }
  }
  get(key){
    return this._config[key]
  }
}
