import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovie, IMovieExt } from "../models/IMovie";
import { get } from "./serviceBase";

const BASE_URL = `https://omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}&`;

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
  const response = await get<IOmdbResponse>(`${BASE_URL}s=${searchText}`);

  return response.data.Search;
};

export const getMovie = async (id: string) => {
  const response = await get<IMovieExt>(`${BASE_URL}i=${id}`);

  return response.data;
};

// Add more CRUD methods as needed
