import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setInputValue } from "../../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const dispatch = useDispatch();
  const { inputValue } = useSelector(selectFilter);
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setInputValue(str));
    }, 1000),
    []
  );
  const onChangeInput = (e) => {
    dispatch(setInputValue(e.target.value));
    updateSearchValue(e.target.value);
  };
  return (
    <div className="header-search">
      <FaSearch className="header-search__icon" />
      <input
        onChange={onChangeInput}
        value={inputValue}
        type="search"
        className="header-search__input"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
