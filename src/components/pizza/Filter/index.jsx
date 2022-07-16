import React from "react";

import "./filter.scss";

const Filter = () => {
  const categoryList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [categoryItem, setCategoryItem] = React.useState(0);

  const onClickCategory = (i) => {
    setCategoryItem(i);
  };
  return (
    <ul className="filter-category__list">
      {categoryList.map((item, index) => (
        <li
          key={index}
          onClick={() => onClickCategory(index)}
          className={`filter-category__item ${
            categoryItem === index ? "filter-category__item--active" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
