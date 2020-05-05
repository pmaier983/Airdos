import { useLocalStorage } from './useLocalStorage'

// verify session return userId
// go to database and get userId using 128 bit session id
const verifySessionGetUserID = (session: string) => (session ? '123456789abc' : undefined)

const useSession = () => {
  const [session, setSession] = useLocalStorage({ key: 'Session', initialValue: undefined })

  const noSessionReturn = [undefined, setSession, undefined]

  if (!session) {
    return noSessionReturn
  }

  const userId = verifySessionGetUserID(session)

  if (!userId) {
    // clear the fake session
    setSession(undefined)
    return noSessionReturn
  }

  return [userId, setSession, session]
}

export { useSession }
