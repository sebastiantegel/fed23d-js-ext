import { IMovieExt } from "../models/IMovieExt";
import { IOmdbResponse } from "../models/IOmdbResponse";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const result: T = await response.json();
  return result;
};

export const getMovies = async (title: string) => {
  const result = await get<IOmdbResponse>(`${BASE_URL}s=${title}`);
  localStorage.setItem("movies", JSON.stringify(result.Search));
  return result.Search;
};

export const getMovie = async (id: string) => {
  return await get<IMovieExt>(`${BASE_URL}i=${id}`);
};
