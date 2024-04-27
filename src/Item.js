import "./Item.css";

const Item = ({ item, deletItem, isChecked }) => {
  return (
    <div className="items ">
      <div className="item" key={item.id}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            isChecked(item.id);
          }}
        />
        <span>{item.numItem} </span>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.nameItem}
        </span>
        <button className="btn" onClick={() => deletItem(item.id)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Item;
