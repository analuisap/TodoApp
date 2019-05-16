import { call, put } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'

export function * getUser (api) {
  const response = yield call(api.getUser)

  if (response.ok) {
    yield put(UserActions.userSuccess(response.data))
  } else {
    yield put(UserActions.userFailure())
  }
}
