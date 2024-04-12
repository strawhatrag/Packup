import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
