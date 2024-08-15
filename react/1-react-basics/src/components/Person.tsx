import { useState } from "react";
import { Human } from "../models/Human";

export const Person = () => {
  //   const [person, setPerson] = useState("Sebastian");
  const [person, setPerson] = useState<Human>(new Human("Sebastian", 44, true));

  const handleClick = () => {
    // setPerson("Hanna");
    setPerson({ ...person, name: "Hanna" });
  };

  console.log(person);
  return (
    <>
      Namn: {person.name}
      <div>
        <button onClick={handleClick}>Byt namn</button>
      </div>
    </>
  );
};
