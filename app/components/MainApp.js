import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

}

export default class MainApp extends Component {

  getCorrectComponent() {

  }

  render() {
    return (
      <View >
        <Text>Main App</Text>
      </View>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)