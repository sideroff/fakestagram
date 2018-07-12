import types from './types'

const changeNetworkStatus = newValue => ({ type: types.CHANGE_NETWORK_STATUS, payload: newValue })
const authStateChanged = user => ({ type: types.AUTH_STATE_CHANGED, payload: user })

export {
  changeNetworkStatus,
  authStateChanged
}