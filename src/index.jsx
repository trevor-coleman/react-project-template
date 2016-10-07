// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import {render} from 'react-dom'
// eslint-disable-next-line
import {Provider} from 'react-redux'
import {createStore} from 'redux'
// eslint-disable-next-line
import choresApp from './reducers'
// eslint-disable-next-line
import App from "./components/App"


let store = createStore(choresApp)

render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
