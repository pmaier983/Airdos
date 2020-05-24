/* eslint-disable no-console */
import _ from 'lodash/fp'
import React, { createContext, useReducer, useContext } from 'react'
// import { useQuery } from '@apollo/react-hooks'

import { useSession } from '../hooks'
// import { usersInfo } from '../dud-data/usersInfo'

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
  // clearSession: () => void,
}

const initialState: IUserState = {
  user: undefined,
  // clearSession: () => undefined,
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
      return state
    case USER_ACTIONS.LOGIN: {
      return state
    }
    case USER_ACTIONS.LOGOUT:
      // state.clearSession()
      return state
    default:
      console.error('The Reducer Doesn\'t handle this type')
      return state
  }
}

const UserProvider: React.FC = ({ children }) => {
  const [userId,, clearSession] = useSession()
  // query database to get userInfo
  const reducedState = useReducer(reducer, { user: undefined })
  return (
    <UserContext.Provider value={reducedState}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
