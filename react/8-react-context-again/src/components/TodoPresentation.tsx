import { useContext } from "react";
// import { Todo } from "../models/Todo";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

// interface ITodoPresentationProps {
// todo: Todo;
// toggleTodo: (id: number) => void;
// removeTodo: (id: number) => void;
// }

export const TodoPresentation = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodosContext);

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ""}>
          {todo.text}
          {/* <button onClick={() => toggleTodo(todo.id)}>Markera klar</button>
          <button onClick={() => removeTodo(todo.id)}>Ta bort</button> */}
          <Button click={() => toggleTodo(todo.id)}>
            <span>Markera klar</span>
          </Button>
          <Button click={() => removeTodo(todo.id)}>
            <span>Ta bort</span>
          </Button>
        </li>
      ))}
    </>
  );
};
