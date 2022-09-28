import React from "react";

function ProductBlock({ name, title, price, imageUrl, colors }) {
  const [activeColor, setActiveColor] = React.useState(0);

  return (
    <div className="product-block">
      <img className="product-block__image" src={imageUrl} alt="Product" />
      <h4 className="product-block__name">{name}</h4>
      <h5 className="product-block__title">{title}</h5>
      <div className="product-block__selector">
        <ul>
          {colors.map((color, index) => (
            <li
              onClick={() => setActiveColor(index)}
              className={activeColor === index ? "active" : ""}
            >
              {color}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-block__bottom">
        <div className="product-block__price">{price} ₽</div>
        <button className="button button--outline button--add">
          {/* СВГШКИ КАКИЕТО УДАЛИТЬ ИХ И ЗАМЕНИТЬ */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          {/* СВГШКИ КАКИЕТО УДАЛИТЬ ИХ И ЗАМЕНИТЬ */}
          <span>Add</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
}

export default ProductBlock;