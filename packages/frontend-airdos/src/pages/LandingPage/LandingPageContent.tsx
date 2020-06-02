import React from 'react'
import styled from 'styled-components'
import {
  Switch,
} from 'react-router-dom'

import { renderRoutes } from '../../Routes'
import { StyledPaddingRowPage } from './landingPageStyles'
import { landingPageRoutes } from './landingPageRoutes'

const StyledContainer = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100%;
  box-shadow: 
    -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const StyledPaddingContainer = styled.div`
  display: flex;
  box-shadow: 
    -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const StyledPaddingColumnContent = styled.div`
  height: 100%;
  width: 15px;
`

const LandingPageContent = () => (
  <StyledContainer>
    <StyledPaddingRowPage />
    <StyledPaddingContainer>
      <StyledPaddingColumnContent />
      <Switch>
        {renderRoutes(landingPageRoutes)}
      </Switch>
      <StyledPaddingColumnContent />
    </StyledPaddingContainer>
  </StyledContainer>
)

export { LandingPageContent }
