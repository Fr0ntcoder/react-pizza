import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/filter/slice";
import {
  Sort as SortType,
  SortPropertyEnum,
} from "../../../redux/filter/types";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import "./sort.scss";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  value: SortType;
};
export const sortList: SortItem[] = [
  { name: "популярности (DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности (ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "алфавиту (DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "алфавиту (ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];
export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const closeDropMenu = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div ref={sortRef} className="pizza-sort">
      <div className="pizza-sort__text">
        {open ? (
          <FaSortUp className="pizza-sort__icon pizza-sort__icon-up" />
        ) : (
          <FaSortDown className="pizza-sort__icon pizza-sort__icon-down" />
        )}

        <span className="pizza-sort__text-inner">
          <span>Сортировка по: </span>
          <span
            className="pizza-sort__text-link"
            onClick={() => setOpen(!open)}
          >
            {value.name}
          </span>
        </span>
        <ul
          className={`pizza-sort__list ${
            open ? "pizza-sort__list--visible" : ""
          }`}
        >
          {sortList.map((item, i) => (
            <li
              key={i}
              onClick={() => closeDropMenu(item)}
              className={`pizza-sort__item
                ${
                  value.sortProperty === item.sortProperty
                    ? "pizza-sort__item--active"
                    : ""
                }
              `}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
