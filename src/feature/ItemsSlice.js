// Import createSlice and createAsyncThunk from Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for fetched fashion items
const initialState = {
  initialItems: [], // Stores fetched products
  loading: "idle", // Tracks loading status: 'idle', 'loading', 'succeeded', 'error'
};

// Async thunk to fetch e-commerce fashion data from API
export const fetchE_commerceData = createAsyncThunk(
  "fashion/fetchData", // Action type prefix
  async () => {
    const res = await fetch(
      "https://68dcc10a7cd1948060ab362d.mockapi.io/api/ecommerce/luxelune1/fashion"
    );
    const data = await res.json();
    return data; // Return fetched data to be handled in extraReducers
  }
);

// Create fashion data slice
const fashionData = createSlice({
  name: "fashion", // Slice name
  initialState,
  extraReducers: (builder) => {
    builder
      // Pending state when fetch starts
      .addCase(fetchE_commerceData.pending, (state) => {
        state.loading = "loading";
      })
      // Fulfilled state when fetch succeeds
      .addCase(fetchE_commerceData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.initialItems = action.payload; // Save fetched items in state
      })
      // Rejected state if fetch fails
      .addCase(fetchE_commerceData.rejected, (state) => {
        state.loading = "error";
      });
  },
});

// Export reducer as default for store configuration
export default fashionData.reducer;
