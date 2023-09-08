"use client"
import { apiSlice } from '@/features/api/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'

function Provider({ children }) {
    return (
        <ApiProvider api={apiSlice}>
            {children}
        </ApiProvider>
    )
}

export default Provider