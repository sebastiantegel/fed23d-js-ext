import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionTypes;
  payload: string;
}

export enum ActionTypes {
  ADDED,
  TOGGLED,
  REMOVED,
}

export const TodosReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionTypes.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionTypes.TOGGLED:
      return todos.map((todo) =>
        todo.id.toString() === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case ActionTypes.REMOVED:
      return todos.filter((todo) => todo.id.toString() !== action.payload);

    default:
      return todos;
  }
};
