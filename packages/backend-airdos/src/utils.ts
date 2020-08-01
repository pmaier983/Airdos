import crypto from 'crypto'
import { tokens, users } from './dud-data'

export const getUserFromToken = (token: string) => {
  if (!token) {
    return undefined
  }
  const [usernameToken, hmac] = token.replace(/["]/g, '').split(':')
  const possibleUsername = tokens[usernameToken]
  const possibleHMAC = crypto.createHmac('SHA256', usernameToken).update(`${possibleUsername}:${usernameToken}`).digest('base64')
  if (hmac === possibleHMAC) {
    return users[possibleUsername]
  }
  return undefined
}
