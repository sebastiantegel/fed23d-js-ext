import { Params } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { getMovie, getMovies } from "../services/movieService";

export const moviesLoader = async (): Promise<IMovie[]> => {
  return await getMovies("star");
};

interface IMovieLoader {
  params: Params<string>;
}

export const movieLoader = async ({ params }: IMovieLoader) => {
  return await getMovie(params.id!);
};
