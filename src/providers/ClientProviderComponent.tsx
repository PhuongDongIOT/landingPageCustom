'use client'
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC, ReactNode } from 'react'

interface ClientProviderComponentProps {
    children: ReactNode
}

const queryClient = new QueryClient()

export const ClientProviderComponent: FC<ClientProviderComponentProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen /> */}
        </QueryClientProvider>
    )
}