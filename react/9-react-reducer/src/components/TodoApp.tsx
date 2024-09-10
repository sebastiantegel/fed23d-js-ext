import { FormEvent, useReducer, useState } from "react";
import { ActionType, TodosReducer } from "../reducers/TodosReducer";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: userInput,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button
              onClick={() => {
                dispatch({
                  type: ActionType.TOGGLED,
                  payload: todo.id.toString(),
                });
              }}
            >
              Ändra
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ActionType.REMOVED,
                  payload: todo.id.toString(),
                });
              }}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
      <section>{JSON.stringify(todos)}</section>
    </>
  );
};
