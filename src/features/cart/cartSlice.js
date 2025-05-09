import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload=newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload=pizzaId
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload:pizzaId
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload:pizzaId
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, el) => sum + el.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, el) => sum + el.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((el) => el.pizzaId === id)?.quantity ?? 0;
