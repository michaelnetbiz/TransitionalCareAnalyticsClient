// @flow
import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './data/configureStore'
import App from './App'
import { rootElement } from './util/constants'
import './styles/style.scss'

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider
    children={
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    }
    store={store}
  />, rootElement
)
