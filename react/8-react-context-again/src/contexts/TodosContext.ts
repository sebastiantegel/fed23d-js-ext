import { createContext } from "react";
import { Todo } from "../models/Todo";

interface ITodoContext {
  todos: Todo[];
  saveTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodosContext = createContext<ITodoContext>({
  todos: [],
  saveTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});
