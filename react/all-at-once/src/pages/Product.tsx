import { useParams } from "react-router-dom";
import { ProductPresentation } from "../components/ProductPresentation";
import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

export const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  if (id) {
    const product = products.find((p) => p.id === +id);

    if (product)
      return (
        <>
          <ProductPresentation
            product={product}
            detailMode={true}
          ></ProductPresentation>
        </>
      );
  }

  return <>Did not find product</>;
};
