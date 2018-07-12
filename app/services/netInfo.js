import { NetInfo } from 'react-native'

import actionTypes from './actionTypes'

let _dispatch
let weHaveInternet = null

function init(dispatch) {
  _dispatch = dispatch

  NetInfo.getConnectionInfo().then(dispatchNetworkChange).catch(error => {
    dispatchNetworkChange(null)
  })

  NetInfo.addEventListener('connectionChange', dispatchNetworkChange)
}

function dispatchNetworkChange(connectionInfo) {
  weHaveInternet = true

  if (!connectionInfo
    || connectionInfo.type === 'none'
    || connectionInfo.type === 'unknown') {
    weHaveInternet = false
  }

  _dispatch({ type: actionTypes.NETWORK_CHANGE, payload: weHaveInternet })
}

export default { init, weHaveInternet }