import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: {
      product_token: Cookies.get("product_token"),
    },
  },
  reducers: {
    clearState: (state) => {
      return {
        ...state,
      };
    },
    login: (state, { payload }) => {
      //  set login state
      Cookies.set("product_token", payload.token);
      state.token.product_token = payload.token;
    },
    logout: (state) => {
      Cookies.remove("product_token");

      state.token.product_token = null;
    },
  },
});

export const { clearState, login, logout } = appSlice.actions;
export const appSelector = (state) => state.app;
