import { useLocalStorage } from './useLocalStorage'

// verify session return userId
// go to database and get userId using 128 bit session id
const verifySessionGetUserID = (session: string) => (session === '123456789abc' ? '983' : undefined)

// eslint-disable-next-line no-unused-vars
const generateSession = (userId: string) => (userId ? '123456789abc' : undefined)

type useSessionType = () => [
  undefined | string,
  (validUserId: string) => void,
  () => void
]

const useSession: useSessionType = () => {
  const [session, setSession, removeSession] = useLocalStorage({ key: 'Session', initialValue: undefined })

  const establishSession = (validUserId: string) => {
    // validate userId (maybe?)
    setSession(generateSession(validUserId))
  }

  const userId = verifySessionGetUserID(session)

  return [userId, establishSession, removeSession]
}

export { useSession }
