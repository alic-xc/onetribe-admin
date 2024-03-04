import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const userAPI = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("authorization", "Bearer " + localStorage.getItem("access"));
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMyAccount: builder.query({ query: () => "users/me" }),
    getCustomers: builder.query({ query: () => "users/" }),
    getCustomerDetails: builder.query({
      query: (params) => `users/${params.id}`,
    }),
    updatePassword: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
  }),
});

export const {
  useGetCustomerDetailsQuery,
  useGetCustomersQuery,
  useGetMyAccountQuery,
  useUpdatePasswordMutation,
} = userAPI;
