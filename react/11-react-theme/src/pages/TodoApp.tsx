import { useContext, useReducer } from "react";
import { TodosReducer } from "../reducers/TodosReducer";
import { TodosContext } from "../contexts/TodosContext";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";
import { AddTodo } from "../components/Todos/AddTodo";
import { TodosPresentation } from "../components/Todos/TodosPresentation";
import { ThemeContext } from "../contexts/ThemeContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2>{theme.name}</h2>
      <TodosDispatchContext.Provider value={dispatch}>
        <AddTodo />

        <TodosContext.Provider value={todos}>
          <TodosPresentation />
        </TodosContext.Provider>
      </TodosDispatchContext.Provider>
    </>
  );
};
