import React from 'react'
import styled from 'styled-components'
import {
  Switch,
} from 'react-router-dom'

import { renderRoutes } from '../../Routes'
import { PaddingRowPage } from './landingPageStyles'
import { landingPageRoutes } from './landingPageRoutes'

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100%;
  box-shadow: 
    -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingContainer = styled.div`
  display: flex;
  box-shadow: 
    -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingColumnContent = styled.div`
  height: 100%;
  width: 15px;
`

const LandingPageContent = () => (
  <Container>
    <PaddingRowPage />
    <PaddingContainer>
      <PaddingColumnContent />
      <Switch>
        {renderRoutes(landingPageRoutes)}
      </Switch>
      <PaddingColumnContent />
    </PaddingContainer>
  </Container>
)

export { LandingPageContent }
