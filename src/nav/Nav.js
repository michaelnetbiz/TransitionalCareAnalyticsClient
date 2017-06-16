// @flow
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { appName, primaryColor } from '../util/constants'
import AuthMenu from './AuthMenu'
import MainMenu from './MainMenu'

export default class extends Component {
  props: {
    dispatch: () => mixed;
    isAuthenticated: boolean;
  }

  render () {
    return (
      <nav>
        <AppBar
          iconElementLeft={
            <MainMenu
              {...this.props}
            />
          }
          iconElementRight={
            <AuthMenu
              {...this.props}
            />
          }
          style={{
            'backgroundColor': primaryColor
          }}
          title={appName}
          titleStyle={{
            'textAlign': 'center'
          }}
        />
      </nav>

    )
  }
}
