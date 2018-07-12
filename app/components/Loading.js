import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={this.props.size || 'large'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})