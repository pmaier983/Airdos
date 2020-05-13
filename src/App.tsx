import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { MockedProvider } from '@apollo/react-testing'

import { Routes } from './Routes'
import { mocks } from './dud-data/mocks'

const FontWrapper = styled.div`
  font-family: ${({ theme }) => theme.normalFontFamily};
  font-size: ${({ theme }) => theme.normalFontSize};
`

const App = () => (
  <FontWrapper>
    <MockedProvider addTypename={false} mocks={mocks}>
      <Router>
        <Routes />
      </Router>
    </MockedProvider>
  </FontWrapper>
)

export { App }
