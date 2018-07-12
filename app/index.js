import React, { Component } from 'react'
import { StatusBar, View, } from 'react-native'
import { Provider } from 'react-redux'

import { InitialLoadingScreen } from './components'

import store from './store'

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <InitialLoadingScreen />
        </View>
      </Provider>

    )
  }
}
