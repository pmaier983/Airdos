import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Routes } from './Routes'

const FontWrapper = styled.div`
  font-family: ${({ theme }) => theme.normalFontFamily};
  font-size: ${({ theme }) => theme.normalFontSize};
`

const App = () => (
  <FontWrapper>
    <Router>
      <Routes />
    </Router>
  </FontWrapper>
)

export { App }
