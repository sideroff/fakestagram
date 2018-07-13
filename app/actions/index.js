import types from './types'

import firebase from 'firebase'

const changeNetworkStatus = newValue => ({ type: types.CHANGE_NETWORK_STATUS, payload: newValue })
const changeCurrentUser = user => ({ type: types.CHANGE_CURRENT_USER, payload: user })

const updateLoginMessage = message => ({ type: types.UPDATE_LOGIN_MESSAGE, payload: message })
const updateRegisterMessage = message => ({ type: types.UPDATE_REGISTER_MESSAGE, payload: message })

const changeAuthState = state => ({ type: types.CHANGE_AUTH_STATE, payload: state })

const login = values => dispatch => {
  dispatch(changeAuthState(types.authStates.logginIn))

  firebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(updateLoginMessage(error.message))
  })
}

const register = values => dispatch => {
  dispatch(changeAuthState(types.authStates.registering))

  firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(updateRegisterMessage(error.message))
  })
}

const logout = () => dispatch => {
  dispatch(changeAuthState(types.authStates.loggingOut))

  firebase.auth().signOut().catch(error => {
    console.log('could not logout')
  })
}



export {
  changeNetworkStatus,
  changeCurrentUser,

  updateLoginMessage,
  updateRegisterMessage,

  changeAuthState,

  login,
  register,
  logout,
}