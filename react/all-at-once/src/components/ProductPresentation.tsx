import { Link } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { ImageWrapper, ProductWrapper } from "./styled/Wrappers";
import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { ActionType } from "../reducers/ProductReducer";

interface IProductPresentation {
  product: IProduct;
  detailMode?: boolean;
}

export const ProductPresentation = ({
  product,
  detailMode,
}: IProductPresentation) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <ProductWrapper selected={product.selected}>
      <h2>{product.name}</h2>
      <ImageWrapper>
        <img src={product.imageUrl} alt={product.name} />
      </ImageWrapper>

      <span>{product.price}</span>
      {!detailMode && <Link to={`/product/${product.id}`}>Läs mer</Link>}
      <button
        onClick={() => {
          dispatch({
            type: ActionType.SELECTED,
            payload: product.id.toString(),
          });
        }}
      >
        Välj
      </button>
    </ProductWrapper>
  );
};
