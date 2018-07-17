import types from './../actions/types'

const defaultState = {
  photos: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_PHOTOS:
      return state
    case types.UPDATE_PHOTOS:
      return Object.assign({}, state, { photos: action.payload })
    default:
      return state
  }
}