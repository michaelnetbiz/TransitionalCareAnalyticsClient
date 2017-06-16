// @flow
import React, { Component } from 'react'
import { IconMenu } from 'material-ui/IconMenu'
import { MenuItem } from 'material-ui/Menu'
import { IconButton } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { iconColor } from '../util/constants'

export default class extends Component {
  render () {
    console.log(this.props)
    return (
      <IconMenu
        {...this.props}
        anchorOrigin={{
          'horizontal': 'right',
          'vertical': 'top'
        }}
        children={[
          <MenuItem
            key={0}
            primaryText={'wut'}
          />,
          <MenuItem
            key={1}
            primaryText={'wut'}
          />
        ]}
        iconButtonElement={
          <IconButton>
            <MenuIcon
              color={iconColor}
            />
          </IconButton>
        }
        targetOrigin={{
          'horizontal': 'right',
          'vertical': 'bottom'
        }}
      />
    )
  }
}
