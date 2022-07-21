import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setSort,
  setCurrentPage,
} from "../../../redux/slices/filterSlice";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import "./sort.scss";
export const sortName = [
  {
    name: "популярности(DESC)",
    type: "rating",
    value: "desc",
  },
  {
    name: "популярности(ASC)",
    type: "rating",
    value: "asc",
  },
  {
    name: "цене(DESC)",
    type: "price",
    value: "desc",
  },
  {
    name: "цене(ASC)",
    type: "price",
    value: "asc",
  },
  {
    name: "алфавиту(DESC)",
    type: "name",
    value: "desc",
  },
  {
    name: "алфавиту(ASC)",
    type: "name",
    value: "asc",
  },
];
const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  const [sortDrop, setSortDrop] = React.useState(false);
  function closeDropMenu(obj) {
    dispatch(setSort(obj));
    dispatch(setCurrentPage(1));
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
            {sort.name}
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
              onClick={() => closeDropMenu(item)}
              className={`pizza-sort__item ${
                sort.name === item.name ? "pizza-sort__item--active" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
