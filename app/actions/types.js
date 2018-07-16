export default {
  UPDATE_OVERLAY_STATE: 'UPDATE_OVERLAY_STATE',
  CHANGE_NETWORK_STATUS: 'CHANGE_NETWORK_STATUS',
  CHANGE_CURRENT_USER: 'CHANGE_CURRENT_USER',
  CHANGE_AUTH_STATE: 'CHANGE_AUTH_STATE',

  UPDATE_LOGIN_MESSAGE: 'UPDATE_LOGIN_MESSAGE',
  UPDATE_OVERLAY_MESSAGE: 'UPDATE_OVERLAY_MESSAGE',
  UPDATE_REGISTER_MESSAGE: 'UPDATE_REGISTER_MESSAGE',

  TESTING: 'TESTING',

  authStates: {
    registering: 'registering',
    loggingIn: 'loggingIn',
    loggedIn: 'loggedIn',
    loggingOut: 'loggingOut',
    loggedOut: 'loggedOut'
  },

  overlayStates: {
    loading: 'loading',
    success: 'success',
    failure: 'failure',
  }
}