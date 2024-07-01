'use client'

import { FC } from 'react'
import { AdminControllerComponent } from '@/providers'
import { BackComponent } from '@/components/micures'
import { useAdminService } from '@/features/admin/admin.hook'

const AdminCustomPage: FC = () => {
    
    const { status } = useAdminService()
    console.log('====================================');
    console.log(status);
    console.log('====================================');
    
    return (
        <>
            <BackComponent />
            <AdminControllerComponent listItemComponent={
                [
                    'CardComponent',
                    'CategoryPreviewComponent'
                ]
            } />    
        </>
    )
}

export {
    AdminCustomPage
}