import { createContext, Dispatch } from "react";
import { IThemeAction } from "../reducers/ThemesReducer";

export const ThemeDispatchContext = createContext<Dispatch<IThemeAction>>(
  () => {
    return;
  }
);
