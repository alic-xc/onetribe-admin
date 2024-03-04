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
    getProducts: builder.query({ query: () => "fashorg/products" }),
    getCategories: builder.query({ query: () => "fashorg/categories" }),
    createCategory: builder.mutation({
      query: (initial) => ({
        url: `fashorg/admin/categories/`,
        method: "POST",
        body: initial,
      }),
    }),

    updateCategory: builder.mutation({
      query: (initial) => ({
        url: `fashorg/admin/categories/${initial.id}`,
        method: "PATCH",
        body: initial,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (initial) => ({
        url: `fashorg/admin/categories/${initial.id}`,
        method: "DELETE",
        body: initial,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productAPI;
