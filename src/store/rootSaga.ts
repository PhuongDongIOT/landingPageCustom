import { all } from 'redux-saga/effects'
import { adminWatcherSaga } from '@/features/admin/admin.saga'

export function* rootSaga() {
  yield all([adminWatcherSaga()])
}

export default rootSaga