import useItemsStore from "../stores/itemsStore";
import Counter from "./Counter";

export default function Header() {
  const items = useItemsStore((state) => state.items);
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
