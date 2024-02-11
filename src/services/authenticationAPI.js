import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const authenticationAPI = createApi({
  reducerPath: "authenticationAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFreeSubscription: builder.query({ query: () => "subscriptions/" }),
    sendRegistration: builder.mutation({
      query: (initialRegistration) => ({
        url: "users/",
        method: "POST",
        body: initialRegistration,
      }),
    }),
    otpVerification: builder.mutation({
      query: (initialOTPVerification) => ({
        url: "auth/activation/",
        method: "POST",
        body: initialOTPVerification,
      }),
    }),
    resendOTP: builder.mutation({
      query: (initialResendOTP) => ({
        url: "auth/send_otp/",
        method: "POST",
        body: initialResendOTP,
      }),
    }),
    login: builder.mutation({
      query: (initialLogin) => ({
        url: "auth/login/",
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
    password: builder.mutation({
      query: (initial) => ({
        url: "auth/password/reset/",
        method: "POST",
        body: initial,
      }),
    }),
  }),
});

export const {
  useSendRegistrationMutation,
  useOtpVerificationMutation,
  useResendOTPMutation,
  useLoginMutation,
  useRequestPasswordMutation,
  usePasswordMutation,
  useGetFreeSubscriptionQuery,
} = authenticationAPI;
