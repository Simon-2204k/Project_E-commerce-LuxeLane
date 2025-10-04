import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  initialItems: [],
  loading: "idle",
};
export const fetchE_commerceData = createAsyncThunk(
  "fashion/fetchData",
  async () => {
    const res = await fetch(
      "https://68dcc10a7cd1948060ab362d.mockapi.io/api/ecommerce/luxelune1/fashion"
    );
    const data = await res.json();
    return data;
  }
);

const fashionData = createSlice({
  name: "fashion",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchE_commerceData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchE_commerceData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.initialItems = action.payload;
      })
      .addCase(fetchE_commerceData.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export default fashionData.reducer;
