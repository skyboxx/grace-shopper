import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import keyboardsReducer from './keyboards'
import singleKeyboardReducer from './singleKeyboard'

const reducer = combineReducers({
  user: userReducer,
  keyboards: keyboardsReducer,
  singleKeyboard: singleKeyboardReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
