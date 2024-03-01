import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const authenticationAPI = createApi({
  reducerPath: "authenticationAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (initialLogin) => ({
        url: "auth/login",
        method: "POST",
        body: initialLogin,
      }),
    }),
    requestPassword: builder.mutation({
      query: (initial) => ({
        url: "auth/password/forgot/",
        method: "POST",
        body: initial,
      }),
    }),
  }),
});

export const { useLoginMutation, useRequestPasswordMutation } =
  authenticationAPI;
