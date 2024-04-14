export default function Button({ handleRemoveAllItems, buttonType, children }) {
  return (
    <button
      onClick={handleRemoveAllItems}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
