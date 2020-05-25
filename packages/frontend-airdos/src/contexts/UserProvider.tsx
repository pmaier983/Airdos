/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'
import { useSession } from '../hooks'

export interface IUser {
  id: string,
  name: string,
  firstName: string,
  middleName?: string,
  lastName: string,
  username: string,
  collegeName?: string,
  groups: string[],
}

interface IUserState {
  user?: IUser,
  removeSession: () => void,
  establishSession: (username: string) => void,
}

const initialState: IUserState = {
  user: undefined,
  removeSession: () => undefined,
  establishSession: () => undefined,
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

export const USER_ACTIONS = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  LOGIN_AND_REMEMBER: 'LOGIN_AND_REMEMBER',
}

type ContextProps = [IUserState, React.Dispatch<IAction>]

export const UserContext = createContext<ContextProps>(
  [
    initialState,
    () => console.error('Place a Provider In A Parent Node to get User Info'),
  ],
)

export const useUserContext = () => useContext(UserContext)

const reducer = (state: IUserState, action: IAction) => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN:
      return { ...state, user: action.payload }
    case USER_ACTIONS.LOGIN_AND_REMEMBER:
      state.establishSession(action.payload.username)
      return { ...state, user: action.payload }
    case USER_ACTIONS.LOGOUT:
      state.removeSession()
      return { ...state, user: undefined }
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const UserProvider: React.FC = ({ children }) => {
  const [, establishSession, removeSession] = useSession()
  const reducedState = useReducer(reducer, { user: undefined, establishSession, removeSession })

  return (
    <UserContext.Provider value={reducedState}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
