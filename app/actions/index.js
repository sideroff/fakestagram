import types from './types'

const changeNetworkStatus = newValue => ({ type: types.CHANGE_NETWORK_STATUS, payload: newValue })
const authStateChanged = user => ({ type: types.AUTH_STATE_CHANGED, payload: user })


const testing = data => dispatch => {
  console.log('testing action')
  setTimeout(() => {
    console.log('here')
    dispatch({ type: types.TESTING, payload: data })
  }, 3000)
}


export {
  changeNetworkStatus,
  authStateChanged,
  testing,
}