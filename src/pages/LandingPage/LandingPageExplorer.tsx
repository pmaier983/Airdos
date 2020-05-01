import React from 'react'
import styled from 'styled-components'

import { PaddingRowPage } from './landingPageStyles'

const Container = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  height: 100%;
  top: 0px;
`

const ExplorerSearch = styled.input`
  border-radius: ${({ theme }) => theme.normalBorderRadius}; 
  height: ${({ theme }) => theme.largeFontSize};
  box-shadow: ${({ theme }) => theme.basicBoxShadow};
  border: none;
  :focus {
    outline: none;
  }
`

const LandingPageExplorer = () => (
  <Container>
    <PaddingRowPage />
    <ExplorerSearch placeholder="Explore Airdos" />
  </Container>
)

export { LandingPageExplorer }
