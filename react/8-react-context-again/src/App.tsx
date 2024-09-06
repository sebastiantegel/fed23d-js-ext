import { useState } from "react";
import "./App.scss";
import { ThemeContext } from "./contexts/ThemeContext";
import { ITheme, themes } from "./models/ITheme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  const toggleTheme = () => {
    theme.name === themes.light.name
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeContext.Provider>
  );
}

export default App;
