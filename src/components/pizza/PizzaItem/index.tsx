import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../../../redux/cart/selectors";
import { CartItem } from "../../../redux/cart/types";
import { addItem } from "../../../redux/cart/slice";
import { FaPlus } from "react-icons/fa";

import "./pizza-item.scss";
const typeNames = ["тонкое", "традиционное"];

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};
export const PizzaItem: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="pizza-item">
      <Link to={`/pizza/${id}`} className="pizza-item__img">
        <img src={imageUrl} alt="" className="pizza-item__img" />
      </Link>
      <h3 className="pizza-item__title">{title}</h3>
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
              {typeNames[id]}
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
            addedCount > 0 ? "pizza-item__btn--active" : ""
          }`}
          onClick={onClickAdd}
        >
          <FaPlus />
          <span>Добавить</span>
          {addedCount > 0 ? (
            <span className="pizza-item__btn-counter">{addedCount}</span>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};
