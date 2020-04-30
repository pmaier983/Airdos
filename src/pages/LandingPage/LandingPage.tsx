import React from 'react'
import styled from 'styled-components'

import { FeedStack } from '../../components/FeedStack'

const LandingPageContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`

const LandingPage = () => (
  <LandingPageContainer>
    <FeedStack />
  </LandingPageContainer>
)

export { LandingPage }
