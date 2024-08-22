export interface IMovie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export interface IMovieExt extends IMovie {
  Director: string;
  Plot: string;
  Actors: string;
}
