import { useState } from "react";
import { Product } from "../models/Product";
import { ProductPresentation } from "./ProductPresentation";
import { CartItem } from "../models/CartItem";
import { Cart } from "./Cart";

export const products: Product[] = [
  new Product(1, "Sweden", "Topology", 100, "Lorem ipsum"),
  new Product(2, "Norway", "Goelogical", 200, "Lorem ipsum"),
  new Product(3, "Finland", "Streetview", 300, "Lorem ipsum"),
];

export const Webshop = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: number) => {
    const foundCartProduct = cart.find((ci) => ci.product.id === id);

    if (foundCartProduct) {
      setCart(
        cart.map((ci) => {
          if (ci.product.id === id) return { ...ci, amount: ci.amount + 1 };
          return ci;
        })
      );
    } else {
      const foundProduct = products.find((p) => p.id === id);

      if (foundProduct) {
        setCart([...cart, new CartItem(foundProduct, 1)]);
      }
    }
  };

  const decrease = (id: number) => {
    const foundCartItem = cart.find((ci) => ci.product.id === id);

    if (foundCartItem && foundCartItem.amount > 1) {
      setCart(
        cart.map((ci) => {
          if (ci.product.id === id) return { ...ci, amount: ci.amount - 1 };
          return ci;
        })
      );
    } else {
      remove(id);
    }
  };

  const increase = (id: number) => {
    setCart(
      cart.map((ci) => {
        if (ci.product.id === id) return { ...ci, amount: ci.amount + 1 };
        return ci;
      })
    );
  };

  const remove = (id: number) => {
    setCart(cart.filter((ci) => ci.product.id !== id));
  };

  return (
    <>
      <section className="cart">
        <Cart
          cart={cart}
          decrease={decrease}
          increase={increase}
          remove={remove}
        ></Cart>
      </section>
      <section className="products">
        <ProductPresentation
          products={products}
          addToCart={addToCart}
        ></ProductPresentation>
      </section>
    </>
  );
};
