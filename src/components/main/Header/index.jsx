import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../redux/slices/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import Search from "../../pizza/Search";
import "./header.scss";
const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();

  console.log(location);
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
          {location.pathname === "/" && (
            <>
              <Search />
              <Link to="/cart" className="header-cart">
                <span className="header-cart__currency">{totalPrice} ₽</span>
                <span className="header-cart__line"></span>
                <div className="header-cart__counter">
                  <FaShoppingCart />
                  <span>{items.length}</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
