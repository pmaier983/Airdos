/* eslint-disable no-console */
import _ from 'lodash/fp'
import React, { createContext, useReducer, useContext } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useSession } from '../hooks'

import { GET_USER_BY_TOKEN } from '../queries'

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
  // initialize User (How to Remove Flicker)
  const [sessionToken] = useSession()
  const [fireQuery, { called, data }] = useLazyQuery(GET_USER_BY_TOKEN, {
    variables: {
      token: sessionToken,
      secret: process.env.REACT_APP_REMEMBER_ME_SECRET,
    },
  })

  const reducedState = useReducer(reducer, { user: undefined, establishSession, removeSession })
  const [{ user }, dispatchUserEffect] = reducedState

  const possibleUser = _.get('userByToken', data)

  console.log('this is the user:', user)

  if (sessionToken && !called) {
    fireQuery()
  }

  if (possibleUser && !user) {
    dispatchUserEffect({ type: USER_ACTIONS.LOGIN, payload: possibleUser })
  }

  return (
    <UserContext.Provider value={reducedState}>
      {children}
    </UserContext.Provider>
  )
}
export { UserProvider }
