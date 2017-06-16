// @flow
import { approveAuthentication, rejectAuthentication, requestAuthentication } from './authActionCreators'
import { fetchAuthentication } from './authActionHelpers'

export const authenticate = (credentials: Object) => {
  return (dispatch: () => mixed) => {
    dispatch(requestAuthentication(credentials))
    return fetchAuthentication(credentials).then((response: Response) => {
      if (response.ok) {
        return response.json()
      }
      return dispatch(rejectAuthentication(credentials))
    }).then((responseJson) => {
      console.log(responseJson)
      return dispatch(approveAuthentication(credentials))
    })
  }
}
