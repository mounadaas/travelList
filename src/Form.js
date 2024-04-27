import React, { useState } from "react";
import "./Form.css";

const Form = ({ addlItem }) => {
  const [numItem, setnumItem] = useState(1);
  const [nameItem, setnameItem] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!nameItem) return;
    const newItem = { nameItem, numItem, packed: false, id: Date.now() };
    setnameItem("");
    setnumItem(1);
    addlItem(newItem);
  };

  return (
    <div className="trip">
      <p>What do you need for your trip?</p>
      <form onSubmit={handelSubmit}>
        <select value={numItem} onChange={(e) => setnumItem(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={nameItem}
          onChange={(e) => {
            console.log(e.target.value);
            setnameItem(e.target.value);
          }}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Form;
