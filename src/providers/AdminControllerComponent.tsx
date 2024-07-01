import { FC } from 'react'
import {
    CardComponent,
    CategoryPreviewComponent,
    ProductFeatureComponent
} from '@/components/atoms'

import { EditCustomComponent } from './EditCustomComponent'

interface AdminControllerComponentProps {
    listItemComponent: Array<IItemComponent>
}

type IItemComponent = 'CardComponent' | 'CategoryPreviewComponent' | 'ProductFeatureComponent'

const checkExistComponent = (item: IItemComponent) => {
    switch (item) {
        case 'CardComponent':
            return <CardComponent key={item}/>
        // break;
        case 'CategoryPreviewComponent':
            return <CategoryPreviewComponent key={item}/>        
        case 'ProductFeatureComponent':
            return <ProductFeatureComponent key={item}/>
        // break;
        default:
            return null
        // break;
    }
}

export const AdminControllerComponent: FC<AdminControllerComponentProps> = ({ listItemComponent }) => {
    return (
        listItemComponent.map((itemComponent: IItemComponent, index: number) => {

            return (
                <div  key={index} className='group relative hover:p-2 hover:rounded-xl m-2 hover:border-2 hover:border-amber-500 transition-all ease-in-out duration-300'>
                    <div>{checkExistComponent(itemComponent)}</div>

                    <EditCustomComponent />
                </div>
            )
        })
    )
}