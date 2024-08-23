import { createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Movie } from "./pages/Movie";
import { Movies } from "./pages/Movies";
import { moviesLoader } from "./loaders/movieLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        // http://localhost:5173/
        path: "/",
        element: <Home></Home>,
      },
      {
        // http://localhost:5173/about
        path: "/about",
        element: <About></About>,
      },
      {
        // http://localhost:5173/contact
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        // http://localhost:5173/movies
        path: "/movies",
        element: <Movies></Movies>,
        loader: moviesLoader,
      },
      {
        // http://localhost:5173/movie/4711
        path: "/movie/:id",
        element: <Movie></Movie>,
      },
    ],
  },
]);
