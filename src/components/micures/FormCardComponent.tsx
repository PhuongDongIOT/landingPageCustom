'use client'
import {FormComponent} from '@/components/atoms'
import { FC } from 'react'

import { IEventExcuteForm} from '@/types'

interface FormComponentProps {
    eventExcuteForm: IEventExcuteForm
}

export const FormCardComponent:FC<FormComponentProps> = ({eventExcuteForm}) => {
    return (
        <FormComponent eventExcuteForm={eventExcuteForm}/>
    )
} 