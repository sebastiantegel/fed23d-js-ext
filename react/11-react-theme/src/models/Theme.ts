export interface ITheme {
  name: string;
  backgroundColor: string;
  color: string;
}

interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Night",
    backgroundColor: "maroon",
    color: "whitesmoke",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    color: "blue",
  },
};
