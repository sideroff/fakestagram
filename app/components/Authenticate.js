import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Login from './Login'
import Register from './Register'

export default Navigator = createMaterialBottomTabNavigator(
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