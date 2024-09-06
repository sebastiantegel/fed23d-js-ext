import { createBrowserRouter } from "react-router-dom";
import { TodoApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
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
        index: true,
      },
      {
        path: "/todo",
        element: <TodoApp></TodoApp>,
      },
    ],
  },
]);
