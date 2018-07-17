import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Home from './Home'
import PostCreate from './PostCreate'
import Account from './Account'

import { navigation } from './../services'

const Router = createMaterialBottomTabNavigator(
  {
    Home: Home,
    Post: PostCreate,
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

export default class MainApp extends Component {
  render() {
    return (
      <Router ref={navigationRef => navigation.setUp('main', navigationRef)} />
    )
  }
}