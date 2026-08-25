import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../features/Products/productSlice.js";

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//   },
// });

import { productApi } from "../features/api/productApi.js";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});