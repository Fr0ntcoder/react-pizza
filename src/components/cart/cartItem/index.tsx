import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../../redux/cart/slice";
import { CartItem as CartItemType } from "../../../redux/cart/types";

import { FaTimes } from "react-icons/fa";
import "./cart-item.scss";
type CartItemProps = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};
export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemType)
    );
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    if (window.confirm("Ты действительно хочешь удалить товар?")) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <span className="cart-item__img">
          <img src={imageUrl} alt="" />
        </span>
        <div className="cart-item__content">
          <h4 className="cart-item__title">{title}</h4>
          <div className="cart-item__dough">
            <span>{type},</span>
            <span>{size} см.</span>
          </div>
        </div>
      </div>
      <div className="cart-item__counter">
        <span className="cart-item__counter-change" onClick={onClickMinus}>
          -
        </span>
        <span className="cart-item__counter-value">{count}</span>
        <span className="cart-item__counter-change" onClick={onClickPlus}>
          +
        </span>
      </div>
      <div className="cart-item__price">{price * count} ₽</div>
      <div className="cart-item__remove" onClick={onClickRemove}>
        <FaTimes />
      </div>
    </div>
  );
};

export default CartItem;
