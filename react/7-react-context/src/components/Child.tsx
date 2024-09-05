import { useContext } from "react";
import { GrandChild } from "./GrandChild";
import { MyContext } from "../contexts/MyContext";

export const Child = () => {
  const { text, changeText } = useContext(MyContext);

  return (
    <>
      <h2>Child:</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => changeText(e.target.value)}
      />
      <GrandChild />
    </>
  );
};
