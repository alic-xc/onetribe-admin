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
    getNonFreeSubscription: builder.query({ query: () => "subscriptions/" }),
    getMyAccount: builder.query({ query: () => "user/me" }),
    getUser: builder.query({ query: () => "users/" }),
    getCountry: builder.query({ query: () => "countries/" }),
    getState: builder.query({
      query: (countryId) => `state/?country=${countryId}`,
    }),
    getBank: builder.query({ query: () => "banks/" }),
    getUserBank: builder.query({ query: () => "user_banks/" }),
    updateUser: builder.mutation({
      query: (initial) => ({
        url: `users/${initial.object_id}/`,
        method: "PATCH",
        body: initial,
      }),
    }),
    updatePassword: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    updateCompanyProfile: builder.mutation({
      query: (initial) => ({
        url: `company/${initial.id}`,
        method: "PATCH",
        body: initial,
      }),
    }),
    generateTransactionID: builder.mutation({
      query: (initial) => ({
        url: `transaction`,
        method: "POST",
        body: initial,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetMyAccountQuery,
  useGetCountryQuery,
  useGetStateQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useGetNonFreeSubscriptionQuery,
  useUpdateCompanyProfileMutation,
} = userAPI;
