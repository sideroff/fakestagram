import { combineReducers } from 'redux'

import currentUser from './currentUser'
import feed from './feed'
import flags from './flags'

import messages from './messages'
import resources from './resources'

export default combineReducers({
  currentUser,
  feed,
  flags,

  messages,
  resources,
})