// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create wishlist slice
const wishlistSlice = createSlice({
  name: "wishlist", // Slice name
  initialState: {
    // Load wishlist items from localStorage if available, otherwise empty array
    items: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    // Add an item to wishlist if it doesn't already exist
    addToWishlist: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push({ ...action.payload }); // Add new item
      }
      // Persist updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    // Remove an item from wishlist by id
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      // Update localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

// Export slice actions for use in components
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Export reducer as default for store configuration
export default wishlistSlice.reducer;
