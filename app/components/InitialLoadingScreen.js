import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Loading } from '.'

export default class InitialLoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>fakestagram</Text>
        </View>
        <View style={styles.loadingWrapper}>
          <Loading />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  loadingWrapper: {
    flex: 1
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  }
})