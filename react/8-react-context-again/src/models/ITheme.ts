export interface ITheme {
  name: string;
  backgroundColor: string;
  color: string;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Night",
    backgroundColor: "blue",
    color: "whitesmoke",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    color: "grey",
  },
};
