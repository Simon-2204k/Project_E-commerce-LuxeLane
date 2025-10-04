import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartDetails")) || [],
};

const cartSliceFunction = createSlice({
  name: "cartDetails",
  initialState,
  reducers: {
    addFunctionality: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    removeFunctionality: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) item.quantity += 1;
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) item.quantity -= 1;
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },
  },
});

export default cartSliceFunction.reducer;

export const {
  addFunctionality,
  removeFunctionality,
  increaseQuantity,
  decreaseQuantity,
} = cartSliceFunction.actions;
