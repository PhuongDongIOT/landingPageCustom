import { FC } from 'react'
import { TablesComponent } from '@/components/atoms'
import { useAdminService } from '@/features/admin/admin.hook'

const AdminPage: FC = () => {
    const { status } = useAdminService()
    console.log('====================================');
    console.log(status);
    console.log('====================================');

    return (
        <TablesComponent />
    )
}

export {
    AdminPage
}