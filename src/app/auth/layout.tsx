import { ContextReduxProvider } from '@/providers'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ContextReduxProvider>
            {children}
        </ContextReduxProvider>
    )
}