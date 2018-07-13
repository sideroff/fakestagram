import types from './../actions/types'

const defaultState = {
  weHaveInternet: null,
  authState: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_NETWORK_STATUS:
      return Object.assign({}, state, { weHaveInternet: action.payload })
    case types.CHANGE_AUTH_STATE:
      return Object.assign({}, state, { authState: action.payload })
    case types.CHANGE_CURRENT_USER:
      let newState = action.payload ? types.authStates.loggedIn : types.authStates.loggedOut
      return Object.assign({}, state, { authState: newState })
    default:
      return state
  }
}