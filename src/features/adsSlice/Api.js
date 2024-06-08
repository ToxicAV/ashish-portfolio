import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});



export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data, // use body for sending data instead of data
      }),
      invalidatesTags: ["User"],
    }), 

    signUp1: builder.mutation({
      query: (data) => {
        // console.log("Data being passed to signUp1 mutation:", data); // Log the data being passed
        return {
          url: "/signup",
          method: "POST",
          body: data, // use body for sending data instead of data
        };
      },
      invalidatesTags: ["User"],
    }),

    signUp2: builder.mutation({
      query: (data) => {
        // console.log("register user", data);
        return {
          url: "/userdetails",
          method: "POST",
          body: data, 
          // headers: 
        };
      },
      invalidatesTags: ["User"],
    }),

    signUp3: builder.mutation({
      query: (data) => ({
        url: "/companydetails",
        method: "post",
        body: data,  
      }),
    }),

    signUp4: builder.mutation({
      query: (data) => ({
        url: "/companydetails",
        method: "post",
        body: data, 
      }),
    }),
    twitter: builder.mutation({
      query: (data) => ({
        url: "/twitter",
        method: "post",
        body: data, 
      }),
    }),
  }),
});

export const {
  useSignUp1Mutation,
  useSignUp2Mutation,
  useSignUp3Mutation,
  useLoginMutation,
} = baseApi;
