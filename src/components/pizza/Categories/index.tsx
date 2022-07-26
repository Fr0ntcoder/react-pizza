import React from "react";
import "./filter.scss";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    console.log(value);
    return (
      <ul className="filter-category__list">
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`filter-category__item ${
              value === i ? "filter-category__item--active" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
);
