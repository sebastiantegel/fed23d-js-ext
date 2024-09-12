import { useContext } from "react";
import { Todo } from "../models/Todo";
import { ActionTypes } from "../reducers/TodosReducer";
import { TodosDispatchContext } from "../contexts/TodosDispatchContext";

interface ITodoPresentation {
  todo: Todo;
}

export const TodoPresentation = ({ todo }: ITodoPresentation) => {
  const dispatch = useContext(TodosDispatchContext);

  return (
    <li>
      {todo.text}
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.TOGGLED,
            payload: todo.id.toString(),
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionTypes.REMOVED,
            payload: todo.id.toString(),
          })
        }
      >
        Remove
      </button>
    </li>
  );
};
