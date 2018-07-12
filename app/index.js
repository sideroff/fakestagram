import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import * as firebase from 'firebase'


import { TopLevel } from './components'
import store from './store'
import netInfo from './services/netInfo'
import { authStateChanged } from './actions'

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true)


    netInfo.init(store.dispatch)

    var firebaseConfig = {
      apiKey: "AIzaSyBqNezusW58QULnn_f4YcHTb9ZgOnDHJ6U",
      authDomain: "fakestagram-4581d.firebaseapp.com",
      databaseURL: "https://fakestagram-4581d.firebaseio.com",
      projectId: "fakestagram-4581d",
      storageBucket: "fakestagram-4581d.appspot.com",
      messagingSenderId: "7211978662"
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      store.dispatch(authStateChanged(user))
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopLevel />
        </View>
      </Provider>
    )
  }
}