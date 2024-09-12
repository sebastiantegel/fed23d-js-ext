import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/TodosReducer";

export const TodosDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
