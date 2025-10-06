// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial state for selected product details
const initialState = {
  selectedProduct: null, // Stores the currently selected product for details page
};

// Create slice to manage product details
const productSlice = createSlice({
  name: "product", // Slice name
  initialState,
  reducers: {
    // Set the currently selected product
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

// Export action to be dispatched from components
export const { setSelectedProduct } = productSlice.actions;

// Export reducer as default for store configuration
export default productSlice.reducer;
