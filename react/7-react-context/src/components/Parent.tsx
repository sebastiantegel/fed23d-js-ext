import { useContext } from "react";
import { Child } from "./Child";
import { MyContext } from "../contexts/MyContext";

export const Parent = () => {
  const { text } = useContext(MyContext);

  return (
    <>
      <h1>Parent: {text}</h1>

      <Child />
    </>
  );
};
