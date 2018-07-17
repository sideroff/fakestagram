import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

let _instance = null

function configureStore(initialState) {
  const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))

  return createStore(rootReducer, initialState, enhancer)
}

function getInstance() {
  if (!_instance) {
    _instance = configureStore({})
  }

  return _instance
}


export default getInstance()