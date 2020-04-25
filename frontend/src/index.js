import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'


import App from './main/App'
import reducers from './main/reducers'
import * as serviceWorker from './serviceWorker'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
