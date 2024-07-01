import { SubMenu } from '@/components/layouts'
import { AnimationController } from '@/providers'
import { ContextReduxProvider } from '@/providers'


export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ContextReduxProvider>
            <AnimationController>
                <SubMenu>
                    {children}
                </SubMenu>
            </AnimationController>
        </ContextReduxProvider>
    )
}