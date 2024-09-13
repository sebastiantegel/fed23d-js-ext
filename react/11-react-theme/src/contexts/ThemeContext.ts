import { createContext } from "react";
import { ITheme, themes } from "../models/Theme";

export const ThemeContext = createContext<ITheme>(themes.dark);
