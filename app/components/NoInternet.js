import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

}

export default class NoInternet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>No internet</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoInternet)