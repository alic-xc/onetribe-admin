import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const productAPI = createApi({
  reducerPath: "ProductAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("authorization", "Bearer " + localStorage.getItem("access"));
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({ query: () => "users/me" }),
    getSubCategories: builder.query({ query: () => "users/" }),
    createCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    createSubCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    updateCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    updateSubCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
    deleteSubCategory: builder.mutation({
      query: (initial) => ({
        url: `password/change`,
        method: "PATCH",
        body: initial,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useCreateCategoryMutation,
  useCreateSubCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteCategoryMutation,
  useDeleteSubCategoryMutation,
} = productAPI;
