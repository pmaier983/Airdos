/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'

import { useSession } from '../hooks'

import { dudUserInfo } from '../dud-data/user'

interface IUserState {
  userInfo?: {
    id: string,
    name: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    username: string,
  },
  clearSession: () => void,
}

const initialState: IUserState = {
  userInfo: undefined,
  clearSession: () => undefined,
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

export const USER_ACTIONS = {
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
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
    case USER_ACTIONS.UPDATE_USER_INFO:
      // TODO: push to database
      // TODO: verify all userInfo Items
      return { ...state, userInfo: action.payload }
    case USER_ACTIONS.LOGIN:
      // query username Password
      if (action.payload.username === 'gil') {
        action.payload.onSuccess()
        return { ...state, userInfo: dudUserInfo }
      }
      action.payload.onFailure()
      return state
    case USER_ACTIONS.LOGOUT:
      state.clearSession()
      return initialState
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const UserProvider: React.FC = ({ children }) => {
  const [userId,, clearSession] = useSession()
  // query database to get userInfo
  const userInfo = userId ? { ...dudUserInfo } : undefined
  const reducedState = useReducer(reducer, { userInfo, clearSession })
  return (
    <UserContext.Provider value={reducedState}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }