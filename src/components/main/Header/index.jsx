import React from "react";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";

import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <Link to="/" className="header-logo">
            <img src={Logo} className="header-logo__img" />
            <div className="header-logo__content">
              <span className="header-logo__name">React pizza</span>
              <span className="header-logo__text">
                самая вкусная пицца во вселенной
              </span>
            </div>
          </Link>
          <div className="header-search">
            <FaSearch className="header-search__icon" />
            <input
              type="search"
              className="header-search__input"
              placeholder="Поиск пиццы..."
            />
            <FaTimes className="header-search__remove" />
          </div>
          <Link to="/cart" className="header-cart">
            <span className="header-cart__currency">7777</span>
            <span className="header-cart__line"></span>
            <div className="header-cart__counter">
              <FaShoppingCart />
              <span>5</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
