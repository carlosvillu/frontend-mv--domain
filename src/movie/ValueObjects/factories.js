import MovieEntitiesFactories from '../Entities/factories'

import MovieListValueObject from './MovieListValueObject'

export default class MovieValueObjectsFactories {
  static movieListValueObject = ({list}) =>
    new MovieListValueObject({
      listEntities: list.map(movie =>
        MovieEntitiesFactories.movieEntity({id: movie.id, title: movie.title})
      )
    })
}
