import { FormEvent, useState } from "react";

interface IAddTodoProps {
  createShoppingItemInList: (text: string) => void;
}

export const AddTodo = ({ createShoppingItemInList }: IAddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createShoppingItemInList(userInput);

    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Spara</button>
    </form>
  );
};
