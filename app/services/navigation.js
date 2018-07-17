import { NavigationActions } from 'react-navigation'

let _navigator = {}


function setUp(navigationInstanceID, navigationInstance) {
  _navigator[navigationInstanceID] = navigationInstance
}

function navigate(navigationInstanceID, routeName, params) {
  _navigator[navigationInstanceID].dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

export default {
  setUp,
  navigate,
}