import React from "react";
import "./Stats.css";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="footer">Start adding some items to your packing list</p>
    );
  const allItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / allItems) * 100);

  return (
    <div className="footer">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${allItems} item on your list, and you alrady packed ${numPacked} (
            ${percentage}%)`}
      </em>
    </div>
  );
};

export default Stats;
