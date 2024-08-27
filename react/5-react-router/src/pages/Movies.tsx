import { FormEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
// import { IOmdbResponse } from "../models/IOmdbResponse";
import { MoviesPresentation } from "../components/MoviesPresentation";
// import { useLoaderData } from "react-router-dom";
import { getMovies } from "../services/movieService";

export const Movies = () => {
  // const movies = useLoaderData() as IMovie[];

  const [movies, setMovies] = useState<IMovie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setSearching(true);

    const moviesFromSearch = await getMovies(searchText);
    setMovies(moviesFromSearch);

    setSearching(false);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Sök</button>
      </form>
      {searching ? (
        <h2>Loading...</h2>
      ) : (
        <MoviesPresentation movies={movies}></MoviesPresentation>
      )}
    </>
  );
};
