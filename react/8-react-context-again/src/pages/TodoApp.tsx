import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "../components/AddTodo";
import { TodoPresentation } from "../components/TodoPresentation";
import { TodosContext } from "../contexts/TodosContext";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo("Test")]);

  const handleSave = (text: string) => {
    setTodos([...todos, new Todo(text)]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{ todos, saveTodo: handleSave, toggleTodo, removeTodo }}
    >
      <AddTodo />

      <ul>
        <TodoPresentation />
      </ul>
    </TodosContext.Provider>
  );
};
