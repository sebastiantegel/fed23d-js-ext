import { Link } from "react-router-dom";
import { IMovie } from "../models/IMovie";

interface IMoviesPresentationProps {
  movies: IMovie[];
}

export const MoviesPresentation = ({ movies }: IMoviesPresentationProps) => {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <Link to={`/movie/${movie.imdbID}`}>Läs mer</Link>
        </div>
      ))}
    </section>
  );
};
