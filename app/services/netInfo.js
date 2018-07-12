import { NetInfo } from 'react-native'

import { changeNetworkStatus } from '../actions'

let _dispatch
let weHaveInternet = false

function init(dispatch) {
  _dispatch = dispatch

  NetInfo.addEventListener('connectionChange', dispatchNetworkChange)
}

function dispatchNetworkChange(connectionInfo) {
  weHaveInternet = true

  if (!connectionInfo
    || connectionInfo.type === 'none'
    || connectionInfo.type === 'unknown') {
    weHaveInternet = false
  }

  console.log('network change', connectionInfo.type, weHaveInternet)

  _dispatch(changeNetworkStatus(weHaveInternet))
}

export default { init, weHaveInternet }