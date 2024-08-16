import { ShoppingItem } from "../models/Todo";

interface ITodoPresentationProps {
  items: ShoppingItem[];
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
}

export const ItemPresentation = ({
  items,
  deleteItem,
  toggleItem,
}: ITodoPresentationProps) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.text}</span>
          <input type="checkbox" checked={item.done} disabled />
          <button type="button" onClick={() => deleteItem(item.id)}>
            Ta bort
          </button>
          <button onClick={() => toggleItem(item.id)}>Ändra</button>
        </div>
      ))}
    </>
  );
};
