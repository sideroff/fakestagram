import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'


import { logout } from './../actions'

function mapStateToProps(state) {
  return {}
}


class MainApp extends Component {

  getCorrectComponent() {

  }

  render() {
    return (
      <View >
        <Text>Main App</Text>
        <Button title='logout' onPress={() => { this.props.dispatch(logout()) }} />
      </View>
    )
  }
}

export default connect(mapStateToProps, dispatch => ({ dispatch }))(MainApp)