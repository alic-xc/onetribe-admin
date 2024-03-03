import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const authenticationAPI = createApi({
  reducerPath: "authenticationAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getAccessToken: builder.mutation({
      query: (data) => ({
        url: "auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),
    requestPassword: builder.mutation({
      query: (data) => ({
        url: "auth/password/forgot/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRequestPasswordMutation, useGetAccessTokenMutation } =
  authenticationAPI;
