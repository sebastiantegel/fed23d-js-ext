import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const moviesLoader = async (): Promise<IMovie[]> => {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const result: IOmdbResponse = await response.json();

  return result.Search;
};
