// @flow
import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import { IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { iconColor, testCredentials } from '../util/constants'
import { authenticate } from '../auth/data/authActionCreatorWrappers'

export default class extends Component {
  constructor (props: Object) {
    super(props)
    this.handleAuthMenuItemClick = this.handleAuthMenuItemClick.bind(this)
  }

  handleAuthMenuItemClick (): void {
    const {dispatch} = this.props
    dispatch(authenticate(testCredentials))
  }

  handleAuthMenuItemClick: () => mixed

  render () {
    const {isAuthenticated} = this.props
    let item
    isAuthenticated
      ? item =
        <MenuItem
          onClick={this.handleAuthMenuItemClick}
          primaryText={'u logged in'}
        />
      : item = <MenuItem
        onClick={this.handleAuthMenuItemClick}
        primaryText={'u not lol'}
      />
    return (
      <IconMenu
        {...this.props}
        anchorOrigin={{
          'horizontal': 'right',
          'vertical': 'top'
        }}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon
              color={iconColor}
            />
          </IconButton>
        }
        targetOrigin={{
          'horizontal': 'right',
          'vertical': 'bottom'
        }}
      >
        {item}
      </IconMenu>
    )
  }
}
