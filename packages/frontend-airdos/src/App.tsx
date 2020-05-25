import React from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { useLazyQuery } from '@apollo/react-hooks'

import { GET_USER_BY_TOKEN } from './queries'
import { useSession } from './hooks'
import { useUserContext, USER_ACTIONS } from './contexts/UserProvider'
import { Routes } from './Routes'

const FontWrapper = styled.div`
  font-family: ${({ theme }) => theme.normalFontFamily};
  font-size: ${({ theme }) => theme.normalFontSize};
`

const App = () => {
  // initialize User (How to Remove Flicker)
  const [sessionToken] = useSession()
  const [{ user }, dispatchUserEffect] = useUserContext()
  const [fireQuery, { called, data }] = useLazyQuery(GET_USER_BY_TOKEN, {
    variables: {
      token: sessionToken,
      secret: process.env.REACT_APP_REMEMBER_ME_SECRET,
    },
  })
  const possibleUser = _.get('userByToken', data)

  if (sessionToken && !called) {
    fireQuery()
  }

  if (possibleUser && !user) {
    dispatchUserEffect({ type: USER_ACTIONS.LOGIN, payload: possibleUser })
  }

  return (
    <FontWrapper>
      <Router>
        <Routes />
      </Router>
    </FontWrapper>
  )
}

export { App }
