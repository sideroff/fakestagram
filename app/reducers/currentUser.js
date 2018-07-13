import types from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_USER:
      return action.payload || {}
    default:
      return state
  }
}