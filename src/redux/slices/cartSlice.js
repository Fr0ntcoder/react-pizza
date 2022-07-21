import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const findItem = state.items.find((el) => el.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, el) => sum + el.price * el.count,
        0
      );
    },
    countDecrement(state, action) {
      const findItem = state.items.find((el) => el.id === action.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice = state.items.reduce(
          (sum, el) => sum + el.price * el.count,
          0
        );
      }
    },
    removeCart(state, action) {
      state.items = state.items.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const selectCart = (state) => state.cart;
export const selectCartItem = (id) => (state) =>
  state.cart.items.find((el) => el.id === id);
export const { addCart, removeCart, countDecrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
