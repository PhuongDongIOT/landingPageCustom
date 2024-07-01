'use client'
import { FC } from 'react'
import {
    CardComponent,
    CategoryPreviewComponent
} from '@/components/atoms'
import { EditCustomComponent } from './EditCustomComponent'


type IItemComponent = 'CardComponent' | 'CategoryPreviewComponent' | 'ProductFeatureComponent'

interface ControllerComponentProps {
    listItemComponent: Array<IItemComponent>
}

const checkExistComponent = (item: IItemComponent) => {
    switch (item) {
        case 'CardComponent':
            return <CardComponent />
        // break;
        case 'CategoryPreviewComponent':
            return <CategoryPreviewComponent />
        // break;
        default:
            return null
        // break;
    }
}

export const ControllerComponent: FC<ControllerComponentProps> = ({ listItemComponent }) => {
    return (
        listItemComponent.map((itemComponent: IItemComponent, index: number) => {

            return (
                <>
                    <div key={index}>{checkExistComponent(itemComponent)}</div>
                </>
            )
        })
    )
}