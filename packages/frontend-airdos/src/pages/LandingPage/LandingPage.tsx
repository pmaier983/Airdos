import React, { memo } from 'react'
import ReactGA from 'react-ga'
import styled, { css } from 'styled-components'

import { LandingPageNavigation } from './LandingPageNavigation'
import { LandingPageExplorer } from './LandingPageExplorer'
import { LandingPageContent } from './LandingPageContent'

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  ${({ theme }) => css`
    font-weight: ${theme.normalFontWeight};
    background-color: ${theme.backgroundColor};
  `}

`

const StyledContentPaddingColumn = styled.div`
  width: 20px;
  height: 100%;
`

const initializeAnalytics = () => {
  ReactGA.initialize('UA-164973605-2')
  ReactGA.pageview('LandingPage')
}


const LandingPage = memo(() => {
  initializeAnalytics()
  return (
    <StyledContainer>
      <LandingPageNavigation />
      <StyledContentPaddingColumn />
      <LandingPageContent />
      <StyledContentPaddingColumn />
      <LandingPageExplorer />
    </StyledContainer>
  )
})

export { LandingPage }
