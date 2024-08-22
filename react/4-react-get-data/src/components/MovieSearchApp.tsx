import { FormEvent, useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";

export const MovieSearchApp = () => {
  const [userInput, setUserInput] = useState("");

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched) return;

    const getData = async () => {
      const movies = await getMovies("star");
      setMovies(movies);
      setFetched(true);
    };

    getData();
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const movies = await getMovies(userInput);
    setMovies(movies);
    setUserInput("");
  };

  return (
    <>
      {!fetched ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Sök</button>
        </form>
      )}
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </>
  );
};
