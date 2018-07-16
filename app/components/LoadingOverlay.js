import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import types from './../actions/types'
const overlayStates = types.overlayStates

function mapStateToProps(state) {
  return {
    state: state.flags.overlayState,
    text: state.messages.overlayMessage
  }
}

class LoadingOverlay extends Component {

  getCorrectContent() {
    console.log('overlay here')
    let correctContent = (
      <View>
        <Text style={[styles.text, styles.loadingTextStyle, this.props.loadingTextStyle]}>{this.props.text || 'Loading'}</Text>
        <ActivityIndicator size='large' />
      </View>

    )

    if (this.props.state == overlayStates.success) {
      correctContent = (
        <View>
          <Text style={[styles.text, styles.successTextStyle, this.props.successTextStyle]}>{this.props.text || 'Operation success.'}</Text>
          <Text style={[styles.mark, styles.checkMarkStyle, this.props.checkMarkStyle]}>✓</Text>
        </View>
      )
    } else if (this.props.state == overlayStates.failure) {
      correctContent = (
        <View>
          <Text style={[styles.text, styles.failureTextStyle, this.props.failureTextStyle]}>{this.props.text || 'Operation failure.'}</Text>
          <Text style={[styles.mark, styles.crossMarkStyle, this.props.crossMarkStyle]}>✕</Text>
        </View>
      )
    }

    return correctContent
  }

  getContent() {

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {this.getCorrectContent()}
        </View>
      </View>
    )
  }


  render() {
    return this.props.state ? this.getContent() : null
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

export default connect(mapStateToProps, dispatch => ({ dispatch }))(LoadingOverlay)