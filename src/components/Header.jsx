import Counter from "./Counter";

export default function Header({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <header>
      <p></p>
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
