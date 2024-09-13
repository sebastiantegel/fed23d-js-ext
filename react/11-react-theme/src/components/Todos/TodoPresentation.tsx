import { useContext } from "react";
import { TodosDispatchContext } from "../../contexts/TodosDispatchContext";
import { Todo } from "../../models/Todo";
import { ActionTypes } from "../../reducers/TodosReducer";
import { Button } from "../Button";

interface ITodoPresentation {
  todo: Todo;
}

export const TodoPresentation = ({ todo }: ITodoPresentation) => {
  const dispatch = useContext(TodosDispatchContext);

  return (
    <li>
      {todo.text}
      <Button
        onClick={() =>
          dispatch({
            type: ActionTypes.TOGGLED,
            payload: todo.id.toString(),
          })
        }
      >
        <>Toggle</>
      </Button>
      <Button
        onClick={() =>
          dispatch({
            type: ActionTypes.REMOVED,
            payload: todo.id.toString(),
          })
        }
      >
        <>Remove</>
      </Button>
    </li>
  );
};
