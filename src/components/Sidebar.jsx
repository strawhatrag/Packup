import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleResetToInitial,
  handleAddItem,
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsInComplete={handleMarkAllAsInComplete}
      />
    </div>
  );
}
