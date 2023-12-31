import React, { useState } from "react";

function Categories({value, onClickCategory}) {
  
  const categories = ["All", "Meat", "Vege", "Grill", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
