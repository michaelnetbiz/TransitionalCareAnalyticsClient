// @flow
import {
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS
} from './authActionTypes'

export const approveAuthentication = () => {
  return {
    'isAuthenticated': true,
    'isAuthenticating': false,
    'type': AUTHENTICATION_SUCCESS
  }
}

export const requestAuthentication = (input: Object) => {
  return {
    'credentials': input,
    'isAuthenticating': true,
    'type': AUTHENTICATION_REQUEST
  }
}

export const rejectAuthentication = () => {
  return {
    'isAuthenticated': false,
    'isAuthenticating': false,
    'type': AUTHENTICATION_FAILURE
  }
}
