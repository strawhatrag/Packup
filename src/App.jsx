import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleRemoveAllItems={handleRemoveAllItems}
          handleAddItem={handleAddItem}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
