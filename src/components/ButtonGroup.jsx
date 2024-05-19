import Button from "./Button";

import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleResetToInitial,
    handleRemoveAllItems,
    handleMarkAllAsInComplete,
    handleMarkAllAsComplete,
  } = useItemsContext();

  const secondaryButtons = [
    {
      label: "Mark all as completed",
      handleClick: handleMarkAllAsComplete,
    },
    {
      label: "Mark all as incomplete",
      handleClick: handleMarkAllAsInComplete,
    },
    {
      label: "Reset to initial",
      handleClick: handleResetToInitial,
    },
    {
      label: "Remove all items",
      handleClick: handleRemoveAllItems,
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
