import crypto from 'crypto'
import { tokens, users } from './dud-data'

export const getUserFromToken = (token: string, secret: string) => {
  if (!token) {
    return undefined
  }
  const [usernameToken, hmac] = token.split(':')
  const possibleUsername = tokens[usernameToken]
  const possibleHMAC = crypto.createHmac('SHA256', secret).update(`${possibleUsername}:${usernameToken}`).digest('base64')

  if (hmac === possibleHMAC) {
    return users[possibleUsername]
  }
  return undefined
}
