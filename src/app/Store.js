import { configureStore } from "@reduxjs/toolkit";
import fashionDataReducers from "../feature/Items";

export const store = configureStore({
  reducer: {
    itemsFetchedData: fashionDataReducers,
  },
});
