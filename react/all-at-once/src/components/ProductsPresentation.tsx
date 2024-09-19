import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { ProductPresentation } from "./ProductPresentation";

export const ProductsPresentation = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((product) => (
        <ProductPresentation
          product={product}
          key={product.id}
        ></ProductPresentation>
      ))}
    </>
  );
};
