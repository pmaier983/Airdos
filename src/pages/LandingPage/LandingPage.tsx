import React from 'react'
import styled from 'styled-components'

import { FeedStack } from '../../components/FeedStack'
import { LandingPageNavigation } from './LandingPageNavigation'
import { LandingPageExplorer } from './LandingPageExplorer'

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.backgroundColor};
`

const LandingPage = () => (
  <LandingPageContainer>
    <LandingPageNavigation />
    <FeedStack />
    <LandingPageExplorer />
  </LandingPageContainer>
)

export { LandingPage }
