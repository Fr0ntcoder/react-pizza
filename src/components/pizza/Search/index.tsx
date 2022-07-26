import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { setSearchValue } from "../../../redux/filter/slice";

import { FaSearch } from "react-icons/fa";
export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  /* const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  }; */

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className="header-search">
      <FaSearch className="header-search__icon" />
      <input
        onChange={onChangeInput}
        value={value}
        type="search"
        className="header-search__input"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};
