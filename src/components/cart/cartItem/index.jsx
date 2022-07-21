import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCart,
  removeCart,
  countDecrement,
} from "../../../redux/slices/cartSlice";
import { FaTimes } from "react-icons/fa";
import "./cart-item.scss";
const CartItem = ({ id, imageUrl, name, price, type, size, count }) => {
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(removeCart(id));
  };
  const onMinus = () => {
    dispatch(countDecrement(id));
  };
  const onPlus = () => {
    dispatch(addCart({ id }));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <span className="cart-item__img">
          <img src={imageUrl} alt="" />
        </span>
        <div className="cart-item__content">
          <h4 className="cart-item__title">{name}</h4>
          <div className="cart-item__dough">
            <span>{type},</span>
            <span>{size} см.</span>
          </div>
        </div>
      </div>
      <div className="cart-item__counter">
        <span className="cart-item__counter-change" onClick={onMinus}>
          -
        </span>
        <span className="cart-item__counter-value">{count}</span>
        <span className="cart-item__counter-change" onClick={onPlus}>
          +
        </span>
      </div>
      <div className="cart-item__price">{price * count} ₽</div>
      <div className="cart-item__remove" onClick={removeCartItem}>
        <FaTimes />
      </div>
    </div>
  );
};

export default CartItem;
