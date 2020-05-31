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
  const establishSession = (username: string) => {
    // const randomKey = crypto.randomBytes(256)
    const randomKey = username
    // store key: randomKey, value: username
    const hmacKey = crypto.createHmac('SHA256', randomKey).update(`${username}:${randomKey}`).digest('base64')
    setSession(`${randomKey}:${hmacKey}`)
  }

  return [session, establishSession, removeSession]
}

export { useSession }
