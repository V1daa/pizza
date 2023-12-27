import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["All", "Meat", "Vege", "Grill", "Spicy", "Closed"];

  const onClickCategory = (id) => {
    setActiveIndex(id);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? "active" : ""}
            key={i}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
