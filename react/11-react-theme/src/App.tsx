import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { ThemeContext } from "./contexts/ThemeContext";
import { themes } from "./models/Theme";
import { useReducer } from "react";
import { ThemesReducer } from "./reducers/ThemesReducer";
import { ThemeDispatchContext } from "./contexts/ThemeDispatchContext";

function App() {
  // const [theme, setTheme] = useState<ITheme>(themes.light);
  const [theme, dispatch] = useReducer(ThemesReducer, themes.light);

  return (
    <>
      <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeContext.Provider value={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ThemeContext.Provider>
      </ThemeDispatchContext.Provider>
    </>
  );
}

export default App;
