import { Todo } from "../models/Todo";

interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  TOGGLED,
  REMOVED,
}

export const TodosReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED: {
      return [...todos, new Todo(action.payload)];
    }

    case ActionType.TOGGLED: {
      return todos.map((todo) => {
        if (todo.id === +action.payload) return { ...todo, done: !todo.done };
        return todo;
      });
    }

    case ActionType.REMOVED: {
      return todos.filter((todo) => todo.id !== +action.payload);
    }
  }
};
