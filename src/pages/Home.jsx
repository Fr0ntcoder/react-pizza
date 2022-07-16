import React from "react";
import axios from "axios";

import Filter from "../components/pizza/Filter";
import Sort from "../components/pizza/Sort";
import PizzaItem from "../components/pizza/PizzaItem";
import Skeleton from "../components/pizza/Skeleton/Index";
const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchPizzaData() {
      try {
        const response = await axios.get(
          "https://62d12f5bdccad0cf17624897.mockapi.io/pizza"
        );
        setIsLoading(false);
        setPizzaItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizzaData();
  }, []);
  return (
    <div className="container">
      <div className="pizza-top">
        <Filter />
        <Sort />
      </div>
      <div className="pizza-wrap">
        <h2 className="pizza-title">Все пиццы</h2>
        <div className="pizza-list">
          {isLoading
            ? [...Array(6)].map(() => <Skeleton />)
            : pizzaItems.map((item) => <PizzaItem key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
