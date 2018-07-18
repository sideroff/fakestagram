import types from './../actions/types'

const defaultState = {
  photos: [],
  selectedPhoto: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_PHOTOS:
      return Object.assign({}, state, { photos: [...state.photos, ...action.payload] })
    case types.UPDATE_SELECTED_PHOTO:
      return Object.assign({}, state, { selectedPhoto: action.payload })
    default:
      return state
  }
}