// DUCKS pattern
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/store/store'

interface IAdminState {
    status: boolean
}

const initialState: IAdminState = {
    status: false
}

// slice
const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        setStatusSucceed(state, action: PayloadAction<boolean>) {
            state.status = action.payload
        }
    },
})

// Actions
const adminActions = {
    setStatus: createAction(`${adminSlice.name}/status`, (action: boolean) => ({
        payload: action,
    })),
    setStatusSucceed: adminSlice.actions.setStatusSucceed
}

// Selectors
const selectAdmin = (state: RootState) => state.adminReducer.status


export type {
    IAdminState
}

export {
    adminActions,
    selectAdmin
}
// Reducer
export default adminSlice.reducer
