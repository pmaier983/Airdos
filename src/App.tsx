import React from 'react'
import styled from 'styled-components'

import { LandingPage } from './pages/LandingPage'

const FontWrapper = styled.div`
  font-family: ${({ theme }) => theme.primaryGlobalFont}, ${({ theme }) => theme.secondaryGlobalFont};
  font-size: ${({ theme }) => theme.normalFontSize};
`

const App = () => (
  <FontWrapper>
    <LandingPage />
  </FontWrapper>
)

export { App }
