import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PickingList from "./PickingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const onaddlItem = (itm) => {
    setItems((items) => [...items, itm]);
  };
  const deletItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const isChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  function ClearAll() {
    setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form addlItem={onaddlItem} />
      <PickingList
        items={items}
        deletItem={deletItem}
        isChecked={isChecked}
        onClearAll={ClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
