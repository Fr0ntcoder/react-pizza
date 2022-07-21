import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from "../../../redux/slices/filterSlice";
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
  const dispatch = useDispatch();
  const { categoryId } = useSelector(selectFilter);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  };
  return (
    <ul className="filter-category__list">
      {categoryList.map((item, index) => (
        <li
          key={index}
          onClick={() => onChangeCategory(index)}
          className={`filter-category__item ${
            categoryId === index ? "filter-category__item--active" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
