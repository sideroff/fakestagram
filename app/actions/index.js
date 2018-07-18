import firebase from 'firebase'
import { PermissionsAndroid, CameraRoll } from 'react-native'

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

const getReadExternalStoragePermission = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'We need your permission',
      message: 'We need to access your phone\'s storage'
    }
  )
}

const updateReadExternalStoragePermission = flag => {
  return { type: types.UPDATE_READ_EXTERNAL_STORAGE_PERMISSION, payload: flag }
}

const updateFetchingPhotosFlag = flag => {
  return { type: types.UPDATE_FETCHING_PHOTOS_FLAG, payload: flag }
}

const getPhotos = ({ first, after, assetType }) => dispatch => {
  dispatch(updateFetchingPhotosFlag(true))
  CameraRoll.getPhotos({ first, after, assetType }).then(r => {
    dispatch(updateFetchingPhotosFlag(false))
    dispatch({ type: types.UPDATE_PHOTOS, payload: r.edges })
    dispatch({ type: types.UPDATE_LAST_LOADED_PHOTO_CURSOR, payload: r.page_info.end_cursor })
  }).catch(error => {
    dispatch(updateFetchingPhotosFlag(false))
    console.log('error getting images', error)
  })
}

const selectPhoto = photo => {
  return { type: types.UPDATE_SELECTED_PHOTO, payload: photo }
}


export {
  changeNetworkStatus,
  changeCurrentUser,

  updateLoginMessage,
  updateRegisterMessage,

  changeAuthState,
  getReadExternalStoragePermission,
  updateReadExternalStoragePermission,

  login,
  register,
  logout,
  createPost,
  getPhotos,
  selectPhoto,
}