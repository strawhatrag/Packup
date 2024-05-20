import EmptyView from "./EmptyView";
import Select from "react-select";
import { useMemo, useState } from "react";

import useItemsStore from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by Default", value: "default" },
  { label: "Sort by Packed", value: "packed" },
  { label: "Sort by Unpacked", value: "unpacked" },
];

export default function ItemList() {
  // Using context
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      } else if (sortBy === "unpacked") {
        return a.packed - b.packed;
      } else {
        return 0; // Keep original order if sortBy is "default"
      }
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            value={sortingOptions.find((option) => option.value === sortBy)}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
