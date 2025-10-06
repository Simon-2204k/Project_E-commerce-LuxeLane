// Import createSlice from Redux Toolkit to create slice of state
import { createSlice } from "@reduxjs/toolkit";

// Initial state for cart, retrieved from localStorage if available
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartDetails")) || [],
};

// Create cart slice
const cartSliceFunction = createSlice({
  name: "cartDetails", // Slice name
  initialState,
  reducers: {
    // Add item to cart or update quantity if it already exists
    addFunctionality: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity; // Increment quantity
      } else {
        state.cartItems.push({ ...action.payload }); // Add new item
      }
      // Persist updated cart to localStorage
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    // Remove item from cart by id
    removeFunctionality: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      // Update localStorage
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    // Increase quantity of a specific cart item by 1
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) item.quantity += 1;
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },

    // Decrease quantity of a specific cart item by 1 (minimum 1)
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) item.quantity -= 1;
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems));
    },
  },
});

// Export reducer as default for store configuration
export default cartSliceFunction.reducer;

// Export slice actions to be dispatched in components
export const {
  addFunctionality,
  removeFunctionality,
  increaseQuantity,
  decreaseQuantity,
} = cartSliceFunction.actions;
