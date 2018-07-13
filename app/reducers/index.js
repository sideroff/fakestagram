import { combineReducers } from 'redux'

import currentUser from './currentUser'
import flags from './flags'
import feed from './feed'

export default combineReducers({
  currentUser,
  flags,
  feed,
})