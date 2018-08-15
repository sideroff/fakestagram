import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
import App from './app/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)