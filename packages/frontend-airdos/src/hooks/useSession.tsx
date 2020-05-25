import crypto from 'crypto'
import { useLocalStorage } from './useLocalStorage'

type useSessionType = () => [
  undefined | string,
  (username: string) => void,
  () => void
]

const useSession: useSessionType = () => {
  const [session, setSession, removeSession] = useLocalStorage({ key: 'Session', initialValue: undefined })

  // TODO: ensure that env is present
  const secret = process.env.REACT_APP_REMEMBER_ME_SECRET || '123' // '123' is not the value in the .env

  const establishSession = (username: string) => {
    // const randomKey = crypto.randomBytes(256)
    const randomKey = username
    // store key: randomKey, value: username
    const hmacKey = crypto.createHmac('SHA256', secret).update(`${username}:${randomKey}`).digest('base64')
    setSession(`${randomKey}:${hmacKey}`)
  }

  return [session, establishSession, removeSession]
}

export { useSession }
