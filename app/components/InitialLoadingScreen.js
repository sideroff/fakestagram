import React, { Component } from 'react'
import { View, Image } from 'react-native'

import { Loading } from './index'

export default class InitialLoadingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('./../src/fakestagram-logo.png')} style={{ flex: 1, width: undefined, height: undefined }} />
        <Loading />
      </View>
    )
  }
}
