import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Products/productSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});