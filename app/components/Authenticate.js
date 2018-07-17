import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Login from './Login'
import Register from './Register'

import { navigation } from './../services'

const Router = createMaterialBottomTabNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: 'Login',
    activeTintColor: '#000000',
    inActiveTintColor: '#a7ffeb',
    barStyle: {
      backgroundColor: '#e3f2fd',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  }
)


export default class Authenticate extends Component {
  render() {
    return (
      <Router ref={navigationRef => navigation.setUp('auth', navigationRef)} />
    )
  }
}