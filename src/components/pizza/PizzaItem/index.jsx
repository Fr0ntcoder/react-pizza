import React from "react";

import { FaPlus } from "react-icons/fa";

import "./pizza-item.scss";

function PizzaItem({ imageUrl, name, types, sizes, price, rating }) {
  const typeName = ["Тонкое", "Традиционное"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  return (
    <div className="pizza-item">
      <span className="pizza-item__img">
        <img src={imageUrl} alt="" className="pizza-item__img" />
      </span>
      <h3 className="pizza-item__title">{name}</h3>
      <div className="pizza-item__content">
        <div className="pizza-item__dough">
          {types.map((id, i) => (
            <span
              onClick={() => setActiveType(id)}
              key={i}
              className={`pizza-item__dough-link ${
                activeType === id ? "pizza-item__dough-link--active" : ""
              }`}
            >
              {typeName[id]}
            </span>
          ))}
        </div>
        <div className="pizza-item__depth">
          {sizes.map((size, i) => (
            <span
              key={i}
              onClick={() => setActiveSize(i)}
              className={`pizza-item__depth-link ${
                activeSize === i ? "pizza-item__depth-link--active" : ""
              }`}
            >
              {size} см
            </span>
          ))}
        </div>
      </div>
      <div className="pizza-item__bottom">
        <span className="pizza-item__price">от {price} ₽</span>
        <div className="pizza-item__btn">
          <FaPlus />
          <span>Добавить</span>
          <span className="pizza-item__btn-counter">1</span>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
