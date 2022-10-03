import React from "react";

function Categories({ value, onChangeCategoty }) {
  const categories = ["All", "Accessories", "Cosmetics", "Interior", "Brands"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategoty(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
