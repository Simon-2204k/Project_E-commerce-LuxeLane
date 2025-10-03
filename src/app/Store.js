import { configureStore } from "@reduxjs/toolkit";
import fashionDataReducers from "../feature/ItemsSlice";
import cartSliceFunctionReducers from "../feature/cartFuncSlice";
import wishlistReducers from "../feature/wishList";
import productReducers from "../feature/pageDetails";

export const store = configureStore({
  reducer: {
    itemsFetchedData: fashionDataReducers,
    cartFunctionality: cartSliceFunctionReducers,
    wishlist: wishlistReducers,
    product: productReducers,
  },
});
