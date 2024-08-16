import { CartItem } from "../models/CartItem";

interface ICartProps {
  cart: CartItem[];
  decrease: (id: number) => void;
  increase: (id: number) => void;
  remove: (id: number) => void;
}

export const Cart = ({ cart, decrease, increase, remove }: ICartProps) => {
  let totalCost = 0;

  cart.forEach((ci) => {
    totalCost += ci.amount * ci.product.price;
  });

  return (
    <>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.product.id}>
            <span>{cartItem.product.name}</span>
            <span>
              <button onClick={() => decrease(cartItem.product.id)}>-</button>
              {cartItem.amount} pcs
              <button onClick={() => increase(cartItem.product.id)}>+</button>
            </span>
            <span>
              <button onClick={() => remove(cartItem.product.id)}>
                Remove
              </button>
            </span>
          </li>
        ))}

        {totalCost > 0 && <div>Total cost: {totalCost}</div>}
      </ul>
    </>
  );
};
