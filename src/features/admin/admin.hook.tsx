import { useCallback } from 'react'

import {adminActions,selectAdmin} from './admin.slice'
import { useAppDispatch, useAppSelector } from '@/store/hook'


export type IUseAdminOperators = {
    status: boolean
    setStatus: (status: boolean) => unknown

}


export const useAdminService = (): Readonly<IUseAdminOperators> => {

    const dispatch = useAppDispatch()

    return {
        status: useAppSelector(selectAdmin),
        setStatus: useCallback(
            (status: boolean) => {
                dispatch(adminActions.setStatus(status))
            },
            [dispatch],
        )
    }
}

export default useAdminService