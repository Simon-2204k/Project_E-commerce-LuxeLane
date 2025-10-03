import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
        existing.quantity += action.payload.quantity; // respect payload
      } else {
        state.cartItems.push({ ...action.payload }); // assume payload already has quantity
      }
    },

    removeFunctionality: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) item.quantity -= 1;
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
