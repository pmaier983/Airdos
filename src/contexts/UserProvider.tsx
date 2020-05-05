/* eslint-disable no-console */
import React, { createContext, useReducer, useContext } from 'react'

import { useSession } from '../hooks'

import { dudUserInfo } from '../dud-data/user'

interface IUserState {
  userInfo?: {
    name: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    username: string,
  }
}

const initialState: IUserState = {
  userInfo: undefined,
}

interface IAction {
  type: string,
  // TODO: Specify state of payload
  payload?: any,
}

export const USER_ACTIONS = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
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
    case USER_ACTIONS.UPDATE_NAME:
      // TODO: push to database
      return { ...state, name: action.payload }
    case USER_ACTIONS.UPDATE_USERNAME:
      // TODO: push to database
      return { ...state, username: action.payload }
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const UserProvider: React.FC = ({ children }) => {
  const [userId] = useSession()
  // query database to get userInfo
  const userInfo = userId ? { userInfo: dudUserInfo } : { userInfo: undefined }
  const reducedState = useReducer(reducer, userInfo)
  return (
    <UserContext.Provider value={reducedState}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
