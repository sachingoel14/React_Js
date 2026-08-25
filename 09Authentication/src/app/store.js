import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/api/authApi.js";
import userReducer from "../features/products/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});