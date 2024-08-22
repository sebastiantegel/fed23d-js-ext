import "./App.css";
import { MovieSearchApp } from "./components/MovieSearchApp";
import { useFetch } from "./hooks/useFetch";
import { IOmdbResponse } from "./models/IOmdbResponse";

function App() {
  const [loading, response] = useFetch<IOmdbResponse>(
    `https://omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&s=star`
  );

  return (
    <>
      <div>
        <MovieSearchApp></MovieSearchApp>
      </div>
      <div>
        {loading ? <>Loading...</> : <>Movies: {response?.Search.length}</>}
      </div>
    </>
  );
}

export default App;
