import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../models/ITheme";

export const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/todo"}>Todos</NavLink>
            </li>
          </ul>
        </nav>
        <Button click={toggleTheme}>
          <>
            Ändra tema till {theme.name === themes.dark.name ? "Light" : "Dark"}
          </>
        </Button>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
