import { useState } from "react";
import { Human } from "../models/Human";

export const Persons = () => {
  const [persons, setPersons] = useState<Human[]>([]);

  const addPerson = () => {
    setPersons([...persons, new Human("Sebastian", 44, true)]);
  };

  const removePerson = (id: number) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  const changePerson = (id: number) => {
    setPersons(
      persons.map((p) => {
        if (p.id === id) return { ...p, name: "Hanna" };
        return p;
      })
    );
  };

  return (
    <>
      <button onClick={addPerson}>Add</button>
      {persons.map((p) => (
        <div key={p.id}>
          <span>
            {p.name} - {p.age} -{" "}
            <input type="checkbox" checked={p.isMarried} disabled />
          </span>
          <button onClick={() => removePerson(p.id)}>Remove</button>
          <button onClick={() => changePerson(p.id)}>Change</button>
        </div>
      ))}
    </>
  );
};
