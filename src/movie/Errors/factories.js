import GenericMovieError from "./GenericMovieError";
import NotFoundMovieError from "./NotFoundMovieError";
import NotImplementedMovieError from "./NotImplementedMethodMovie";


export default class MovieErrorsFactories {
  static genericMovieError = () => new GenericMovieError()
  static notFoundError = () => new NotFoundMovieError()
  static notImplementedMovieError = () => NotImplementedMovieError()

}