import { ChangeEvent, FormEvent, useState } from "react";
import { Person } from "../models/Person";

export const PersonForm = () => {
  const [person, setPerson] = useState<Person>({
    name: "",
    adress: "",
    email: "",
    password: "",
    numberOfIceCreams: 0,
    likesIceCreams: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.target.name === "name"
    // e.target.name === "adress"
    // e.target.name === "email"

    if (
      e.target.type === "text" ||
      e.target.type === "email" ||
      e.target.type === "password"
    ) {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.name]: e.target.checked });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate

    console.log("Submitting: ", person);
  };

  // Validate

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={person.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          value={person.adress}
          onChange={handleChange}
          name="adress"
        />
        <input
          type="email"
          value={person.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          value={person.password}
          onChange={handleChange}
          name="password"
        />
        <input
          type="number"
          value={person.numberOfIceCreams}
          onChange={handleChange}
          name="numberOfIceCreams"
        />
        <input
          type="checkbox"
          checked={person.likesIceCreams}
          onChange={handleChange}
          name="likesIceCreams"
        />
        <button>Spara</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </>
  );
};
