import Button from "./Button";

export default function ButtonGroup({
  handleResetToInitial,
  handleRemoveAllItems,
  handleMarkAllAsInComplete,
  handleMarkAllAsComplete,
}) {
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
