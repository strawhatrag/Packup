import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleAddItem, handleRemoveAllItems }) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup handleRemoveAllItems={handleRemoveAllItems} />
    </div>
  );
}
