import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoPresentation } from "./TodoPresentation";

export const TodosPresentation = () => {
  const todos = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoPresentation todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
