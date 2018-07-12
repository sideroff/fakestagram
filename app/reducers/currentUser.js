import types from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case types.AUTH_STATE_CHANGED:
      return action.payload || {}
    default:
      return state
  }
}