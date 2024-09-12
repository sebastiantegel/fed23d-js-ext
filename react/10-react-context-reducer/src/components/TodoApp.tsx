import { useReducer } from "react";
import { TodosReducer } from "../reducers/TodosReducer";
import { TodosPresentation } from "./TodosPresentation";
import { TodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    <>
      <TodosDispatchContext.Provider value={dispatch}>
        <AddTodo />

        <TodosContext.Provider value={todos}>
          <TodosPresentation />
        </TodosContext.Provider>
      </TodosDispatchContext.Provider>
    </>
  );
};
