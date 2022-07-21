import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilters, selectFilter } from "./redux/slices/filterSlice";
import { fetchPizza } from "./redux/slices/pizzaSlice";
import qs from "qs";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import SinglePizza from "./pages/SinglePizza";
import MainLayout from "./layouts/MainLayout";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, inputValue } =
    useSelector(selectFilter);

  const fetchPizzaData = async () => {
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const searchVal = inputValue.length != 0 ? `&search=${inputValue}` : "";
    dispatch(fetchPizza({ sort, currentPage, category, searchVal }));
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          categoryId: params.categoryId,
          currentPage: params.currentPage,
          sort: {
            type: params.type,
            value: params.value,
            name: sort.name,
          },
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    fetchPizzaData();
    /* if (!isSearch.current) {
      fetchPizzaData();
    } */
    isSearch.current = false;
  }, [categoryId, sort.type, sort.value, inputValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        type: sort.type,
        value: sort.value,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.type, sort.value, currentPage]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="pizza/:id" element={<SinglePizza />} />
      </Route>
    </Routes>
  );
}

export default App;
