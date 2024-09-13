import { Outlet } from "react-router-dom";
import { Button } from "../components/Button";
import { ThemeActionTypes } from "../reducers/ThemesReducer";
import { useContext } from "react";
import { ThemeDispatchContext } from "../contexts/ThemeDispatchContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../models/Theme";

export const Layout = () => {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  return (
    <>
      <header>
        <Button
          onClick={() => {
            dispatch({ type: ThemeActionTypes.TOGGLED, payload: "" });
          }}
        >
          <>
            Ändra till:{" "}
            {theme.name === themes.light.name
              ? themes.dark.name
              : themes.light.name}
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
