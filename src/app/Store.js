// Import configureStore from Redux Toolkit to create the store
import { configureStore } from "@reduxjs/toolkit";

// Import all feature slice reducers
import fashionDataReducers from "../feature/ItemsSlice"; // Handles fetched products/categories
import cartSliceFunctionReducers from "../feature/cartFuncSlice"; // Handles cart operations (add, remove, quantity)
import wishlistReducers from "../feature/wishList"; // Handles wishlist operations
import productReducers from "../feature/pageDetails"; // Handles selected product details for details page

// Configure Redux store with all slices
export const store = configureStore({
  reducer: {
    itemsFetchedData: fashionDataReducers, // State for all fetched items
    cartFunctionality: cartSliceFunctionReducers, // State for cart items & quantities
    wishlist: wishlistReducers, // State for wishlist items
    product: productReducers, // State for selected product details
  },
});
