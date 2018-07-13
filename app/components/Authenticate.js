import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Login from './Login'
import Register from './Register'

export default Navigator = createMaterialBottomTabNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: 'Register',
    activeTintColor: '#000000',
    inActiveTintColor: '#a7ffeb',
    initialRouteName: 'Register',
    barStyle: {
      backgroundColor: '#e3f2fd',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  }
)