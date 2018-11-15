import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

export const readToken = () => Cookies.get('token')

export const authentication = () => {
  const token = readToken()
  if (token) {
    return jwtDecode(token)
  }
}