import MovieEntity from './MovieEntity'

export default class MovieEntitiesFactories {
  static movieEntity = ({id, title}) => new MovieEntity({id, title})
}
