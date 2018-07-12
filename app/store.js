import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

function configureStore(initialState) {
  const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))

  return createStore(rootReducer, initialState, enhancer)
}

export default configureStore({})