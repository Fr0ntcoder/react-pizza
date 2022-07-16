import React from "react";
import ShopingCart from "../assets/img/shopping-cart.svg";
import {
  FaShoppingCart,
  FaTimes,
  FaTrashAlt,
  FaAngleLeft,
} from "react-icons/fa";

const Cart = () => {
  return (
    <div className="container">
      <div className="cart-wrap">
        <div className="cart-top">
          <h3 className="cart-title">
            <FaShoppingCart />
            <p>Корзина</p>
          </h3>
          <a href="" className="cart-remove">
            <FaTrashAlt />
            <p>Очистить корзину</p>
          </a>
        </div>
        <div className="cart-content">
          <div className="cart-list">
            <div className="cart-item">
              <div className="cart-item__left">
                <span className="cart-item__img">
                  <img
                    src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg"
                    alt=""
                  />
                </span>
                <div className="cart-item__content">
                  <h4 className="cart-item__title">Кисло-сладкий цыпленок</h4>
                  <div className="cart-item__dough">
                    <span>Тонкое,</span>
                    <span>26 см.</span>
                  </div>
                </div>
              </div>
              <div className="cart-item__counter">
                <a href="" className="cart-item__counter-change">
                  -
                </a>
                <span className="cart-item__counter-value">1</span>
                <a href="" className="cart-item__counter-change">
                  +
                </a>
              </div>
              <div className="cart-item__price">275 ₽</div>
              <div className="cart-item__remove">
                <FaTimes />
              </div>
            </div>
          </div>
          <div className="cart-content__info">
            <div className="cart-content__block">
              <p>Всего пицц: </p>
              <span className="cart-content__counter">1 шт</span>
            </div>
            <div className="cart-content__block">
              <p>Сумма заказа: </p>
              <span className="cart-content__sum">200 ₽</span>
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
    </div>
  );
};

export default Cart;
