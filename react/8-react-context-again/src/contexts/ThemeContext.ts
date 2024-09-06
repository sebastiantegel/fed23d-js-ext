import { createContext } from "react";
import { ITheme, themes } from "../models/ITheme";

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.light,
  toggleTheme: () => {},
});
