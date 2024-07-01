import { SubMenuPage } from '@/components/layouts'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SubMenuPage />
            {children}
        </>
    )
}