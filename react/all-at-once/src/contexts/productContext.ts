import { createContext, Dispatch } from "react";
import { IProduct } from "../models/IProduct";
import { IAction } from "../reducers/ProductReducer";

type ProductContextType = {
  products: IProduct[];
  dispatch: Dispatch<IAction>;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  dispatch: () => {
    return;
  },
});
