import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export default class MainApp extends Component {

  getCorrectComponent() {

  }

  render() {
    return (
      <View >
        <Text>Authenticate</Text>
      </View>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)