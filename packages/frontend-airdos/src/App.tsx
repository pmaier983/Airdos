import React from 'react'
import styled, { css } from 'styled-components'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Routes } from './Routes'

const StyledFontWrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.normalFontFamily};
    font-size: ${theme.normalFontSize};
  `}
`

const App = () => (
  <StyledFontWrapper>
    <Router>
      <Routes />
    </Router>
  </StyledFontWrapper>
)

export { App }
