import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export const GrandChild = () => {
  const { text } = useContext(MyContext);

  return (
    <>
      <h3>GrandChild: {text}</h3>
    </>
  );
};
