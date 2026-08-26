import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi", // reducer

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  }), // middleware

  endpoints: (builder) => ({ // endpoints
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;


// http header ---

// 1 url -- end point
// 2 header -- authrization token
// 3 body -- data



// providesTag =['xyz']
//invalidatesTag =['xyz]