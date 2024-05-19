import EmptyView from "./EmptyView";
import Select from "react-select";
import { useContext, useState } from "react";
import { useMemo } from "react";
import { ItemsContext } from "../contexts/itemsContextProvider";

const sortingOptions = [
  {
    label: "Sort by Default",
    value: "default",
  },
  {
    label: "Sort by Packed",
    value: "packed",
  },
  {
    label: "Sort by Unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  //using context
  const { items, handleDeleteItem, handleToggleItem } =
    useContext(ItemsContext);

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        } else {
          return 0; // Explicitly return 0 to keep the original order if sortBy is "default"
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
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
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
