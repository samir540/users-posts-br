import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) => ["Users"],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: (result) => ["Users"],
    }),
    getPosts: builder.query({
      query: (userId) => ({
        url: `/posts?userId=${userId}`,
      }),
      providesTags: (result) => ["Users"],
    }),
    getPost: builder.query({
      query: ({ userId, postId }) => ({
        url: `/posts?userId=${userId}&id=${postId}`,
      }),
      providesTags: (result) => ["Users"],
    }),
    getComments: builder.query({
      query: ({ userId, postId }) => ({
        url: `/comments?userId=${userId}&postId=${postId}`,
      }),
      providesTags: (result) => ["Users"],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: `/comments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    deletePost: builder.mutation({
      query: ({  postId }) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
