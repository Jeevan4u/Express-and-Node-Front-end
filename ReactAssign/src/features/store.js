import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { appSlice } from "./slice/appSlice";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,

    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});
