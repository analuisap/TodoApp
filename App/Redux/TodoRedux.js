import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todoRequest: null,
  todoSuccess: ['todos'],
  todoFailure: null
})

export const TodoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  todos: [],
  error: false
})

/* ------------- Selectors ------------- */

export const TodoSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { todos } = action
  return state.merge({ fetching: false, error: false, todos })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODO_REQUEST]: request,
  [Types.TODO_SUCCESS]: success,
  [Types.TODO_FAILURE]: failure
})
