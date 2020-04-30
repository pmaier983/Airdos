import React from 'react'
import styled from 'styled-components'

import { PaddingRowPage } from './landingPageStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ExplorerSearch = styled.input`
  border-radius: ${({ theme }) => theme.searchBubbleBorderRadius}; 
  height: ${({ theme }) => theme.largeFontSize};
  outline: none;
`

const LandingPageExplorer = () => {
  console.log('hi')
  return (
    <Container>
      <PaddingRowPage />
      <ExplorerSearch />
    </Container>
  )
}

export { LandingPageExplorer }
