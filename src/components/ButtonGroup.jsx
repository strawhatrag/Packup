import Button from "./Button";
import useItemsStore from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      label: "Mark all as completed",
      handleClick: markAllAsComplete,
    },
    {
      label: "Mark all as incomplete",
      handleClick: markAllAsIncomplete,
    },
    {
      label: "Reset to initial",
      handleClick: resetToInitial,
    },
    {
      label: "Remove all items",
      handleClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button, index) => (
        <Button key={index} handleClick={button.handleClick} type="secondary">
          {button.label}
        </Button>
      ))}
    </section>
  );
}
