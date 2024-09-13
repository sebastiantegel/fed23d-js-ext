import { useState, FormEvent, useContext } from "react";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { ActionTypes } from "../../reducers/TodosReducer";
import { Button } from "../Button";

export const AddTodo = () => {
  const dispatch = useContext(TodosDispatchContext);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionTypes.ADDED,
      payload: userInput,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button>
        <>Add</>
      </Button>
    </form>
  );
};
