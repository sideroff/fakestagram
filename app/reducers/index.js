import { combineReducers } from 'redux'

import currentUser from './currentUser'
import feed from './feed'
import flags from './flags'

import messages from './messages'

export default combineReducers({
  currentUser,
  feed,
  flags,

  messages,
})