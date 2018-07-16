import types from './types'

import firebase from 'firebase'

const changeNetworkStatus = newValue => ({ type: types.CHANGE_NETWORK_STATUS, payload: newValue })
const changeCurrentUser = user => ({ type: types.CHANGE_CURRENT_USER, payload: user })

const updateLoginMessage = message => ({ type: types.UPDATE_LOGIN_MESSAGE, payload: message })
const updateRegisterMessage = message => ({ type: types.UPDATE_REGISTER_MESSAGE, payload: message })

const changeAuthState = state => ({ type: types.CHANGE_AUTH_STATE, payload: state })

const login = values => dispatch => {
  dispatch(changeAuthState(types.authStates.loggingIn))

  firebase.auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(changeAuthState(types.authStates.loggedOut))
    dispatch(updateLoginMessage(error.message))
  })
}

const register = values => dispatch => {
  dispatch(changeAuthState(types.authStates.registering))

  firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(error => {
    dispatch(changeAuthState(types.authStates.loggedOut))
    dispatch(updateRegisterMessage(error.message))
  })
}

const logout = () => dispatch => {
  dispatch(changeAuthState(types.authStates.loggingOut))

  firebase.auth().signOut().catch(error => {
    console.log('could not logout')
  })
}


const createPost = (posterID, values) => dispatch => {
  
  firebase.database().ref(`posts/${posterID}`).push(values).then(response => {

    //dispatch created post since we have to handle ux
  }).catch(error => {
    //dispatch post not created since we have to handle ux
    console.log('error creating post', error)
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