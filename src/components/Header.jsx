import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";

export default function Header() {
  const { items } = useItemsContext();
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
