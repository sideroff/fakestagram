import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import Home from './Home'
import Account from './Account'

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

// export default connect(mapStateToProps, dispatch => ({ dispatch }))(MainApp)

export default Navigator = createMaterialBottomTabNavigator(
  {
    Home: Home,
    Account: Account
  },
  {
    initialRouteName: 'Home',
    activeTintColor: '#000000',
    inActiveTintColor: '#a7ffeb',
    barStyle: {
      backgroundColor: '#e3f2fd',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  }
)