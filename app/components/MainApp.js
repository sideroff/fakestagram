import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Home from './Home'
import Account from './Account'

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