import { Product } from "../models/Product";

interface IProductPresentationProps {
  products: Product[];
  addToCart: (id: number) => void;
}

export const ProductPresentation = ({
  products,
  addToCart,
}: IProductPresentationProps) => {
  return (
    <>
      {products.map((product) => (
        <section key={product.id} className="product">
          <h2>{product.name}</h2>
          <span>{product.price} kr</span>
          <button onClick={() => addToCart(product.id)}>Add to cart</button>
        </section>
      ))}
    </>
  );
};
