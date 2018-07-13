import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'

import { logout } from './../actions'


function mapStateToProps(state) {
  return {}
}

class Account extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button title='logout' onPress={() => { this.props.dispatch(logout()) }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, dispatch => ({ dispatch }))(Account)