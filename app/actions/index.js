import firebase from 'firebase'

import types from './types'
import { navigation } from './../services'

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

const addOverlay = message => dispatch => {
  dispatch({ type: types.UPDATE_OVERLAY_MESSAGE, payload: message })
  dispatch(updateOverlayState(types.overlayStates.loading))
}

const updateOverlayState = state => dispatch => {
  dispatch({ type: types.UPDATE_OVERLAY_STATE, payload: state })
}

const createPost = (post) => dispatch => {

  dispatch(addOverlay('Creating post...'))

  console.log(post)

  firebase.database().ref(`posts/${post.uid}`).push(post).then(response => {
    console.log('post created')
    dispatch(updateOverlayState(null))
    navigation.navigate('main', 'Home')
  }).catch(error => {
    console.log('error creating post', error)
    dispatch(updateOverlayState(null))
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
  createPost,
}