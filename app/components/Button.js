import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  getCorrectContents() {
    return this.props.disabled
      ? <ActivityIndicator />
      : <Text>{this.props.label || 'Submit'}</Text>
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled} style={[styles.button, this.props.style]}>
        {this.getCorrectContents()}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})