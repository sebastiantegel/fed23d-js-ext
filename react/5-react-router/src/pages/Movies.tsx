import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { MoviesPresentation } from "../components/MoviesPresentation";
import { useLoaderData } from "react-router-dom";

export const Movies = () => {
  const movies = useLoaderData() as IMovie[];

  // const [movies, setMovies] = useState<IMovie[]>([]);
  // const [fetched, setFetched] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://omdbapi.com/?apikey=416ed51a&s=star"
  //       );
  //       const result: IOmdbResponse = await response.json();

  //       setMovies(result.Search);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setFetched(true);
  //     }
  //   };

  //   if (!fetched) getData();
  // });

  return (
    <>
      <MoviesPresentation movies={movies}></MoviesPresentation>
    </>
  );
};
