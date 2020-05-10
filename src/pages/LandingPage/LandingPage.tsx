import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'

import { LandingPageNavigation } from './LandingPageNavigation'
import { LandingPageExplorer } from './LandingPageExplorer'
import { LandingPageContent } from './LandingPageContent'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: ${({ theme }) => theme.normalFontWeight};
  background-color: ${({ theme }) => theme.backgroundColor};
`

const ContentPaddingColumn = styled.div`
  width: 20px;
  height: 100%;
`

const initializeAnalytics = () => {
  ReactGA.initialize('UA-164973605-2')
  ReactGA.pageview('LandingPage')
}

const LandingPage = () => {
  initializeAnalytics()
  return (
    <Container>
      <LandingPageNavigation />
      <ContentPaddingColumn />
      <LandingPageContent />
      <ContentPaddingColumn />
      <LandingPageExplorer />
    </Container>
  )
}

export { LandingPage }
