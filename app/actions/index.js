import types from './types'

import firebase from 'firebase'

const changeNetworkStatus = newValue => ({ type: types.CHANGE_NETWORK_STATUS, payload: newValue })
const authStateChanged = user => ({ type: types.AUTH_STATE_CHANGED, payload: user })

const updateLoginMessage = message => ({ type: types.UPDATE_LOGIN_MESSAGE, payload: message })
const updateRegisterMessage = message => ({ type: types.UPDATE_REGISTER_MESSAGE, payload: message })

const updateLoginInFlag = flag => ({ type: types.UPDATE_LOGGIN_IN_FLAG, payload: flag })
const updateRegisteringFlag = flag => ({ type: types.UPDATE_REGISTERING_FLAG, payload: flag })


const testing = data => dispatch => {
  console.log('testing action')
  setTimeout(() => {
    console.log('testing action completed')
    dispatch({ type: types.TESTING, payload: data })
  }, 3000)
}


const login = values => dispatch => {
  dispatch(updateLoginInFlag(true))

  firebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(updateLoginMessage(error.message))
  })
}

const register = values => dispatch => {
  dispatch(updateRegisteringFlag(true))

  firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(updateRegisterMessage(error.message))
  })
}



export {
  changeNetworkStatus,
  authStateChanged,

  updateLoginMessage,
  updateRegisterMessage,

  updateLoginInFlag,
  updateRegisteringFlag,

  login,
  register,

  testing,
}