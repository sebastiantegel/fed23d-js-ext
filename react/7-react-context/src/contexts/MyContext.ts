import { createContext } from "react";

type MyContextType = {
  text: string;
  changeText: (newText: string) => void;
};

export const MyContext = createContext<MyContextType>({
  text: "Lorem ipsum",
  changeText: () => {},
});
