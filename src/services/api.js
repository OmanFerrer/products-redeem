import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coding-challenge-api.aerolab.co/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Bearer <TOKEN>');
      return headers;
    },
  }),
  tagTypes: ['User', 'Product'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => 'user/me',
      providesTags: ['User']
    }),
    getProducts: builder.query({
      query: () => 'products',
      providesTags: result =>
        result
          ? [...result.map((item) => ({ type: 'Product', id: item._id })), 
          { type: 'Product', id: 'LIST' }]
          : [{ type: 'Product', id: 'LIST' }]        
    }),
    redeem: builder.mutation({
      query: productId => ({
        url: 'redeem',
        method: 'POST',
        body: { productId },
      }),
      invalidatesTags: ['User']
    }),
    points: builder.mutation({
      query: amount => ({
        url: 'user/points',
        method: 'POST',
        body: { amount },
      }),
      invalidatesTags: ['User']
    })
  }),
})

export const { useGetUserQuery, useGetProductsQuery, useRedeemMutation, usePointsMutation } = api;