import { useContext } from "react";
import Counter from "./Counter";
import { ItemsContext } from "../contexts/itemsContextProvider";

export default function Header() {
  const { items } = useContext(ItemsContext);
  return (
    <header>
      <p></p>
      <Counter
        numberOfItemsPacked={items.length}
        totalNumberOfItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
