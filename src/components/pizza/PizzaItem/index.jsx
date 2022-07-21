import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItem, addCart } from "../../../redux/slices/cartSlice";
import { FaPlus } from "react-icons/fa";

import "./pizza-item.scss";

function PizzaItem({ id, imageUrl, name, types, sizes, price }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem(id));
  const count = cartItem ? cartItem.count : 0;
  const typeName = ["Тонкое", "Традиционное"];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const getCartItem = () => {
    const data = {
      id,
      name,
      imageUrl,
      price,
      type: typeName[activeType],
      size: sizes[activeSize],
    };
    dispatch(addCart(data));
  };
  return (
    <div className="pizza-item">
      <Link to={`/pizza/${id}`} className="pizza-item__img">
        <img src={imageUrl} alt="" className="pizza-item__img" />
      </Link>
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
        <div
          className={`pizza-item__btn ${
            count > 0 ? "pizza-item__btn--active" : ""
          }`}
          onClick={getCartItem}
        >
          <FaPlus />
          <span>Добавить</span>
          {count > 0 ? (
            <span className="pizza-item__btn-counter">{count}</span>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
