import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { ItemPresentation } from "./TodoPresentation";
import { ShoppingItem } from "../models/Todo";

export const TodoApp = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([
    new ShoppingItem("Potatis"),
  ]);

  const addItem = (textFromUser: string) => {
    setShoppingItems([...shoppingItems, new ShoppingItem(textFromUser)]);
  };

  const removeItem = (id: number) => {
    setShoppingItems(shoppingItems.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    setShoppingItems(
      shoppingItems.map((item) => {
        if (item.id === id) return { ...item, done: !item.done };
        return item;
      })
    );
  };

  return (
    <>
      <AddTodo createShoppingItemInList={addItem}></AddTodo>
      <ItemPresentation
        items={shoppingItems}
        deleteItem={removeItem}
        toggleItem={toggleItem}
      ></ItemPresentation>
    </>
  );
};
