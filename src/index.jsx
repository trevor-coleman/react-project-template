// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import {render} from 'react-dom'
// eslint-disable-next-line
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
// eslint-disable-next-line
import choresApp from './reducers'
// eslint-disable-next-line
import App from "./components/App"
import {fetchChores} from './actions'

// let store = createStore(choresApp, applyMiddleware(thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(choresApp, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.dispatch(fetchChores())

render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
