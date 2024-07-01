import { FC } from 'react'
import { ControllerComponent } from '@/providers'

const HomePage: FC = () => {

    return (
        <ControllerComponent listItemComponent={
            [
                'CardComponent',
                'CategoryPreviewComponent',
                'ProductFeatureComponent'
            ]
        }/>
    )
}

export {
    HomePage
}