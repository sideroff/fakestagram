import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, Dimensions } from 'react-native'


import types from './../actions/types'
const overlayStates = types.overlayStates

export default class Loading extends Component {

  getCorrectContent() {
    let correctContent = (
      <View>
        <Text style={[styles.text, styles.loadingTextStyle, this.props.loadingTextStyle]}>{this.props.loadingText || 'Loading'}</Text>
        <ActivityIndicator size='large' />
      </View>

    )

    if (this.props.state == overlayStates.success) {
      correctContent = (
        <View>
          <Text style={[styles.text, styles.successTextStyle, this.props.successTextStyle]}>{this.props.successText || 'Operation success.'}</Text>
          <Text style={[styles.mark, styles.checkMarkStyle, this.props.checkMarkStyle]}>✓</Text>
        </View>
      )
    } else if (this.props.state == overlayStates.failure) {
      correctContent = (
        <View>
          <Text style={[styles.text, styles.failureTextStyle, this.props.failureTextStyle]}>{this.props.failureText || 'Operation failure.'}</Text>
          <Text style={[styles.mark, styles.crossMarkStyle, this.props.crossMarkStyle]}>✕</Text>
        </View>
      )
    }

    return correctContent
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {this.getCorrectContent()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  innerContainer: {
    backgroundColor: '#00000000',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  successTextStyle: {},
  checkMarkStyle: {},
  failureTextStyle: {},
  crossMarkStyle: {}
})