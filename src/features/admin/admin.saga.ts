
import { SagaIterator } from '@redux-saga/core'
import { put, takeEvery } from 'redux-saga/effects'
import { adminActions } from './admin.slice'

function* constructSetStatus({ payload }: {
    type: typeof adminActions.setStatus.type,
    payload: boolean
}): SagaIterator {
    yield put(adminActions.setStatusSucceed(payload))
}

// Watcher Saga
export function* adminWatcherSaga(): SagaIterator {
    yield takeEvery(adminActions.setStatus.type, constructSetStatus)
}

export default adminWatcherSaga

