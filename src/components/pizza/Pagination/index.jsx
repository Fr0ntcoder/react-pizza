import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  selectFilter,
  setCurrentPage,
} from "../../../redux/slices/filterSlice";
import "./pagination.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectFilter);
  const countPageLength = [...new Array(3)].map((el, i) => i + 1);
  const pagnationHandler = (page) => {
    dispatch(setCurrentPage(page));
  };
  const pagnationHandlerPrev = (page) => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const pagnationHandlerNext = (page) => {
    if (currentPage < 3) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  return (
    <div className="pagination">
      <span className="pagination-link" onClick={pagnationHandlerPrev}>
        <FaChevronLeft />
      </span>
      {countPageLength.map((item) => (
        <span
          className={`pagination-link ${
            currentPage === item ? "pagination-link--active" : ""
          }`}
          key={item}
          onClick={() => pagnationHandler(item)}
        >
          {item}
        </span>
      ))}
      <span className="pagination-link" onClick={pagnationHandlerNext}>
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Pagination;
