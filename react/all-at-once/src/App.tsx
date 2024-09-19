import { useEffect, useReducer } from "react";
import { getProducts } from "./services/productService";
import { ActionType, ProductReducer } from "./reducers/ProductReducer";
import { ProductContext } from "./contexts/productContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.css";

function App() {
  const [products, dispatch] = useReducer(ProductReducer, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(data),
      });
    };

    if (products.length > 0) return;

    getData();
  });

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      <RouterProvider router={router}></RouterProvider>
    </ProductContext.Provider>
  );
}

export default App;
