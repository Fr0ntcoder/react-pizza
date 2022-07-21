import React from "react";
import { useSelector } from "react-redux";
import { selectPizzaItems } from "../redux/slices/pizzaSlice";
import Filter from "../components/pizza/Filter";
import Sort from "../components/pizza/Sort";
import PizzaItem from "../components/pizza/PizzaItem";
import Skeleton from "../components/pizza/Skeleton/Index";
import Pagination from "../components/pizza/Pagination";

const Home = () => {
  const { items, status } = useSelector(selectPizzaItems);
  return (
    <div className="container">
      <div className="pizza-top">
        <Filter />
        <Sort />
      </div>
      <div className="pizza-wrap">
        <h2 className="pizza-title">Все пиццы</h2>
        <div className="pizza-list">
          {status !== "loading"
            ? [...Array(6)].map((el, i) => <Skeleton key={i} />)
            : items.map((item) => <PizzaItem key={item.id} {...item} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
