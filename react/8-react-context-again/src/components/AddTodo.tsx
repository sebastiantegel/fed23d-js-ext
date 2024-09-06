import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

// interface IAddTodoProps {
//   handleSave: (text: string) => void;
// }

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { saveTodo } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button click={() => {}}>
        <span>Spara</span>
      </Button>
    </form>
  );
};
