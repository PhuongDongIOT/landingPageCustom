import createSagaMiddleware from '@redux-saga/core'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import logger from 'redux-logger'
import { rootSaga } from './rootSaga'

import adminReducer from '@/features/admin/admin.slice'

//root reducer
const rootReducer = combineReducers({
    adminReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware()

    const store = configureStore({
        reducer: persistedReducer,
        devTools: true,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: false,
                serializableCheck: false,
                // serializableCheck: {
                //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                // },
                mmutableCheck: false
            })
                .concat(sagaMiddleware)
        // .concat(createDebugger)
        // .concat(logger),
    })

    sagaMiddleware.run(rootSaga)

    return store
}

const store = makeStore()

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

const persistor = persistStore(store)


export type {
    AppDispatch,
    RootState
}

export {
    store,
    persistor
}