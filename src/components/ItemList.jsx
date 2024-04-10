export default function ItemList() {
  return (
    <ul>
      <Item text="good mood" />
      <Item text="good mood" />
      <Item text="good mood" />
    </ul>
  );
}

function Item() {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        good mood
      </label>
      <button>❌</button>
    </li>
  );
}
