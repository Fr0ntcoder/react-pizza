import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../../assets/img/logo.svg";
import { Search } from "../../pizza/Search";
import { selectCart } from "../../../redux/cart/selectors";
import { FaShoppingCart } from "react-icons/fa";
import "./header.scss";
export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);
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
          {location.pathname !== "/cart" && (
            <>
              <Search />
              <Link to="/cart" className="header-cart">
                <span className="header-cart__currency">{totalPrice} ₽</span>
                <span className="header-cart__line"></span>
                <div className="header-cart__counter">
                  <FaShoppingCart />
                  <span>{totalCount}</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
