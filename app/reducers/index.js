import { combineReducers } from 'redux'

import currentUser from './currentUser'
import flags from './flags'

export default combineReducers({
  currentUser,
  flags
})