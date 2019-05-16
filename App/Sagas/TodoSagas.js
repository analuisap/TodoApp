import { call, put } from 'redux-saga/effects'
import TodoActions from '../Redux/TodoRedux'
import UserActions from '../Redux/UserRedux'

export function * getTodo (api) {
  const response = yield call(api.getTodo)

  if (response.ok) {
    yield put(TodoActions.todoSuccess(response.data))
    yield put(UserActions.userRequest())
  } else {
    yield put(TodoActions.todoFailure())
  }
}
