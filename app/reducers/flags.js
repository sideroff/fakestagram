import types from './../actions/types'

const defaultState = {
  weHaveInternet: null,
  authState: null,
  overlayState: null,
  readExternalStoragePermission: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_NETWORK_STATUS:
      return Object.assign({}, state, { weHaveInternet: action.payload })
    case types.CHANGE_AUTH_STATE:
      return Object.assign({}, state, { authState: action.payload })
    case types.UPDATE_OVERLAY_STATE:
      return Object.assign({}, state, { overlayState: action.payload })
    case types.UPDATE_READ_EXTERNAL_STORAGE_PERMISSION:
      return Object.assign({}, state, { readExternalStoragePermission: action.payload })
    case types.CHANGE_CURRENT_USER:
      let newState = action.payload ? types.authStates.loggedIn : types.authStates.loggedOut
      return Object.assign({}, state, { authState: newState })
    default:
      return state
  }
}