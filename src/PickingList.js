import "./PickingList.css";
import Item from "./Item";
import { useState } from "react";

const PickingList = ({ items, deletItem, isChecked, onClearAll }) => {
  const [stored, setStored] = useState("input");
  let storedItem;
  if (stored === "input") storedItem = items;
  if (stored === "name")
    storedItem = items
      .slice()
      .sort((a, b) => a.nameItem.localeCompare(b.nameItem));

  if (stored === "packed")
    storedItem = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <div className="listitems">
        {storedItem.map((item) => (
          <Item
            item={item}
            deletItem={deletItem}
            isChecked={isChecked}
            stored={stored}
            key={item.id}
          />
        ))}
      </div>
      <div className="sorted">
        <select value={stored} onChange={(e) => setStored(e.target.value)}>
          <option value={"input"}>Sorted by input</option>
          <option value={"name"}>Serted by descrption</option>
          <option value={"packed"}>Sorted by packed</option>
        </select>
        <button onClick={onClearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default PickingList;
