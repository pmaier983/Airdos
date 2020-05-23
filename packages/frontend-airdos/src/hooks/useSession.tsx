import crypto from 'crypto'
import { useLocalStorage } from './useLocalStorage'

type useSessionType = () => [
  undefined | string,
  (username: string) => void,
  (username: string) => boolean,
  () => void
]

const useSession: useSessionType = () => {
  const [session, setSession, removeSession] = useLocalStorage({ key: 'Session', initialValue: undefined })

  // TODO: ensure that env is present
  const secret = process.env.REACT_APP_REMEMBER_ME_SECRET || '123' // '123' is not the value in the .env

  // TODO: cleanup code. Very tired when I wrote this
  const verifySession = () => {
    const sessionInfo = session.split(':')
    const randomKey = sessionInfo[0]
    const retrievedHMACKey = sessionInfo[1]
    // TODO: get username from graphql api
    const possibleUsername = randomKey
    return crypto.createHmac('SHA256', secret).update(`${possibleUsername}:${randomKey}`).digest('base64') === retrievedHMACKey
  }

  const establishSession = (username: string) => {
    // const randomKey = crypto.randomBytes(256)
    const randomKey = username
    // store key: randomKey, value: username
    const hmacKey = crypto.createHmac('SHA256', secret).update(`${username}:${randomKey}`).digest('base64')
    setSession(`${randomKey}:${hmacKey}`)
  }

  return [session, establishSession, verifySession, removeSession]
}

export { useSession }
