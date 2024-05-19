import Button from "./Button";
import { ItemsContext } from "../contexts/itemsContextProvider";
import { useContext } from "react";

export default function ButtonGroup() {
  const {
    handleResetToInitial,
    handleRemoveAllItems,
    handleMarkAllAsInComplete,
    handleMarkAllAsComplete,
  } = useContext(ItemsContext);

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
