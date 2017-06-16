// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './nav/Nav'
import Dash from './dash/Dash'

class App extends Component {
  props: {
    'dispatch': () => mixed;
    'isAuthenticated': boolean;
  }

  render () {
    return (
      <div>
        <Nav
          {...this.props}
        />
        <Dash
          {...this.props}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: Object) => {
  const {auth} = state
  const {isAuthenticated} = auth
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(App)
