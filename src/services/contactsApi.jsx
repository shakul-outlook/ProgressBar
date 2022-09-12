import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Contact } from '../models/contact.model';

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ['Contact'],
    endpoints:(builder) => ({
        contacts: builder.query({
            query: () => '/get_endpoint',
            providesTags: ['Contact']
        }),
        status: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['Contact']
        }),
        contact: builder.query({
            query: (id) => `/contacts/${id}`,
            providesTags: ['Contact']
        }),
        addContact: builder.mutation({
            query: contact => ({
                url:'/contacts',
                method:'POST',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        updateContact: builder.mutation({
                query: ({id, ...rest}) => ({
                    url:`/contacts/${id}`,
                    method:'PUT',
                    body: rest
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
                    query: (id) => ({
                        url:`/contacts/${id}`,
                        method:'DELETE'
                    }),
                    invalidatesTags: ['Contact']
                })
        })
})

export const { useContactsQuery, 
    useContactQuery,
    useStatusQuery,
useAddContactMutation,
useUpdateContactMutation,
useDeleteContactMutation } = contactsApi;