import { ClientProviderComponent } from '@/providers'
import { MainBanner, MainHeader, MainFooter } from '@/components/layouts'


export default function PsTLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClientProviderComponent>
            <MainBanner />
            <MainHeader />
            {children}
            <MainFooter />
        </ClientProviderComponent>
    );
}
