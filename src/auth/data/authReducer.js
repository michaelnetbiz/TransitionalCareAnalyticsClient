// @flow
import { AUTH } from '../../data/intialState'
import {
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS
} from './authActionTypes'

export default (state: Object = AUTH, action: Object) => {
  switch (action.type) {
    case AUTHENTICATION_FAILURE:
      return Object.assign({}, state, {
        'isAuthenticated': action.isAuthenticated,
        'isAuthenticating': action.isAuthenticating
      })
    case AUTHENTICATION_REQUEST:
      return Object.assign({}, state, {
        'credentials': action.credentials,
        'isAuthenticating': action.isAuthenticating
      })
    case AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        'isAuthenticated': action.isAuthenticated,
        'isAuthenticating': action.isAuthenticating
      })
    default: {
      return state
    }
  }
}
