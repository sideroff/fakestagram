import types from './../actions/types'

const defaultState = {
  weHaveInternet: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_NETWORK_STATUS:
      return Object.assign({}, state, { weHaveInternet: action.payload })
    default:
      return state
  }
}