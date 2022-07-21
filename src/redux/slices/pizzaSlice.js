import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizzaItems",
  async (params) => {
    const { sort, currentPage, category, searchVal } = params;
    const { data } = await axios.get(
      `https://62d12f5bdccad0cf17624897.mockapi.io/pizza?page=${currentPage}&limit=4${searchVal}${category}&sortBy=${sort.type}&order=${sort.value}`
    );
    return data;
  }
);
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = "pending";
    },
    [fetchPizza.fulfilled]: (state, action) => {
      state.status = "loading";
      state.items = action.payload;
    },
    [fetchPizza.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const selectPizzaItems = (state) => state.pizza;

export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
