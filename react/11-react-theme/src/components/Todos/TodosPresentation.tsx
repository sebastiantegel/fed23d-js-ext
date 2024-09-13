import { useContext } from "react";
import { TodoPresentation } from "./TodoPresentation";
import { TodosContext } from "../../contexts/TodosContext";

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
