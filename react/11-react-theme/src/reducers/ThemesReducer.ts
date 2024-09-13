import { ITheme, themes } from "../models/Theme";

export interface IThemeAction {
  type: ThemeActionTypes;
  payload: string;
}

export enum ThemeActionTypes {
  TOGGLED,
}

export const ThemesReducer = (theme: ITheme, action: IThemeAction): ITheme => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLED: {
      return theme.name === themes.light.name ? themes.dark : themes.light;
    }

    default: {
      return theme;
    }
  }
};
