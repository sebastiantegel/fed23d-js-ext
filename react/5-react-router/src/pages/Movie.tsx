import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovieExt } from "../models/IMovieExt";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovieExt>();

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://omdbapi.com/?apikey=416ed51a&i=${id}`
      );
      const result: IMovieExt = await response.json();

      setMovie(result);
    };

    if (id && !movie) {
      getData();
    }
  });

  return (
    <section className="movie">
      <h2>{movie?.Title}</h2>
      <p>{movie?.Plot}</p>
      <div>
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <p>{movie?.Runtime}</p>
    </section>
  );
};
