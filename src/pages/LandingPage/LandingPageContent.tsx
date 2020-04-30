import React from 'react'
import styled from 'styled-components'

import { FeedStack } from '../../components/FeedStack'
import { FeedInput } from '../../components/FeedInput'
import { PaddingRowPage } from './landingPageStyles'

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  box-shadow: 
    -${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const PaddingColumnContent = styled.div`
  height: 100%;
  width: 15px;
`

const PaddingRowFeedSeparator = styled.div`
  width: 100%;
  height: 20px;
`

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LandingPageContent = () => {
  console.log('hello')
  return (
    <Container>
      <PaddingRowPage />
      <PaddingContainer>
        <PaddingColumnContent />
        <FeedContainer>
          <FeedInput />
          <PaddingRowFeedSeparator />
          <FeedStack />
        </FeedContainer>
        <PaddingColumnContent />
      </PaddingContainer>
    </Container>
  )
}

export { LandingPageContent }
