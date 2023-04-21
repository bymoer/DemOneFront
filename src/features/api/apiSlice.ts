import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: builder => ({
        // Login / logout / register (?)
        getTestAll: builder.query<string, void>({
            query: () => '/test/all'
        }),
        login: builder.mutation({
            query: (loginInfo) => ({
                url: '/auth/signin',
                method: 'POST',
                body: loginInfo
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/signout',
                method: 'POST',
            })
        }),
        getbookings: builder.query<Array<object> | any, void>({
            query: () => '/admin/bookings'
        }),
        getBooking: builder.query<any, string>({
            query: (arg) => ({
                url: `/admin/bookings/${arg}`
            })
        })
    })
})

export const { useGetTestAllQuery, useLoginMutation, useLogoutMutation, useGetbookingsQuery, useGetBookingQuery } = apiSlice
