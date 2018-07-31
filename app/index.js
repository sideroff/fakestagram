import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Provider } from 'react-redux'

import { TopLevel, LoadingOverlay } from './components'
import store from './store'
import { changeCurrentUser } from './actions'

import { firebase, netInfo } from './services'

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true)

    netInfo.init(store.dispatch)
    firebase.init({ onAuthStateChanged: user => store.dispatch(changeCurrentUser(user)) })

  }

  render() {
    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <TopLevel />
          {/* <LoadingOverlay /> */}
        </View>
      </Provider>
    )
  }
}