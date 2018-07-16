import types from './../actions/types'

const defaultState = {
  login: null,
  register: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_LOGIN_MESSAGE:
      return Object.assign({}, state, { login: action.payload })
    case types.UPDATE_OVERLAY_MESSAGE:
      return Object.assign({}, state, { overlay: action.payload })
    case types.UPDATE_REGISTER_MESSAGE:
      return Object.assign({}, state, { register: action.payload })
    default:
      return state
  }
}