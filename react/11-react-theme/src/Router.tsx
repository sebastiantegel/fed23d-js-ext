import { createBrowserRouter } from "react-router-dom";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/todos",
        element: <TodoApp></TodoApp>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
    ],
  },
]);
