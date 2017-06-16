// @flow
import fetch from 'isomorphic-fetch'
import { applicationJsonContentHeader, authEndpoint } from '../../util/constants'

export const fetchAuthentication = (credentials: Object) => {
  const params = {
    method: 'POST',
    headers: applicationJsonContentHeader,
    body: JSON.stringify(credentials)
  }
  return fetch(authEndpoint, params)
}
