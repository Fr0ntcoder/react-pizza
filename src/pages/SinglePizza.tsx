import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const SinglePizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function getItemPizza() {
      try {
        const { data } = await axios.get(
          `https://62d12f5bdccad0cf17624897.mockapi.io/pizza/${id}`
        );
        setPizza(data);
      } catch (error) {
        navigate("/");
        console.log(error);
      }
    }
    getItemPizza();
  }, []);
  if (!pizza) {
    return (
      <div className="container">
        <div className="single-pizza">
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="single-pizza">
        <div className="single-pizza__img">
          <img src={pizza.imageUrl} alt="" />
        </div>
        <h2 className="single-pizza__title">{pizza.title}</h2>
        <div className="single-pizza__bottom">
          <span className="single-pizza__bottom-title">Цена:</span>
          <span className="single-pizza__bottom-price">{pizza.price} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePizza;
