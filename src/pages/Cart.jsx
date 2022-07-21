import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, clearCart } from "../redux/slices/cartSlice";
import ShopingCart from "../assets/img/shopping-cart.svg";
import CartItem from "../components/cart/cartItem";
import { FaShoppingCart, FaTrashAlt, FaAngleLeft } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectCart);
  const pizzaCount = items.reduce((sum, item) => sum + item.count, 0);

  const clearCartList = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container">
      {items.length != 0 ? (
        <div className="cart-wrap">
          <div className="cart-top">
            <h3 className="cart-title">
              <FaShoppingCart />
              <p>Корзина</p>
            </h3>
            <span className="cart-remove" onClick={clearCartList}>
              <FaTrashAlt />
              <p>Очистить корзину</p>
            </span>
          </div>
          <div className="cart-content">
            <div className="cart-list">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="cart-content__info">
              <div className="cart-content__block">
                <p>Всего пицц: </p>
                <span className="cart-content__counter">{pizzaCount} шт</span>
              </div>
              <div className="cart-content__block">
                <p>Сумма заказа: </p>
                <span className="cart-content__sum">{totalPrice} ₽</span>
              </div>
            </div>
            <div className="cart-content__bottom">
              <a href="" className="cart-content__back">
                <FaAngleLeft />
                <p>Вернуться назад</p>
              </a>
              <button className="cart-content__btn">Оплатить сейчас</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <h3 className="cart-empty__title">Корзина пуста 😕</h3>
          <p className="cart-empty__text">
            Вероятней всего, вы не заказывали ещё пиццу.
            <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <span className="cart-empty__img">
            <img src={ShopingCart} alt="" />
          </span>
          <a href=""></a>
        </div>
      )}
    </div>
  );
};

export default Cart;
