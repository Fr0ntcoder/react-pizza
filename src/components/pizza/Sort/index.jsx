import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

import "./sort.scss";
const Sort = () => {
  const sortt = [
    "популярности(DESC)",
    "популярности(ASC)",
    "цене(DESC)",
    "цене(ASC)",
    "алфавиту(DESC)",
    "алфавиту(ASC)",
  ];
  const sortName = ["популярности", "цене", "алфавиту"];
  const [sortItem, setSortItem] = React.useState(0);
  const [sortDrop, setSortDrop] = React.useState(false);
  function closeDropMenu(i) {
    setSortItem(i);
    setSortDrop(false);
  }
  return (
    <div className="pizza-sort">
      <div className="pizza-sort__text">
        {sortDrop ? (
          <FaSortUp className="pizza-sort__icon pizza-sort__icon-up" />
        ) : (
          <FaSortDown className="pizza-sort__icon pizza-sort__icon-down" />
        )}

        <span className="pizza-sort__text-inner">
          <span>Сортировка по: </span>
          <span
            className="pizza-sort__text-link"
            onClick={() => setSortDrop(!sortDrop)}
          >
            {sortName[sortItem]}
          </span>
        </span>
        <ul
          className={`pizza-sort__list ${
            sortDrop ? "pizza-sort__list--visible" : ""
          }`}
        >
          {sortName.map((item, i) => (
            <li
              key={i}
              onClick={() => closeDropMenu(i)}
              className={`pizza-sort__item ${
                sortItem === i ? "pizza-sort__item--active" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
