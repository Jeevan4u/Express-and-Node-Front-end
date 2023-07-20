import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
    prepareHeaders: (headers) => {
      const token = Cookies.get("affix_token");
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    loginAuth: builder.mutation({
      query: (auth) => ({
        url: `/login`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});

export const { useLoginAuthMutation } = authApi;
