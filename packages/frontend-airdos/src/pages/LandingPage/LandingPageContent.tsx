import React from "react"
import styled from "styled-components"

import { LandingPageRoutes } from "./LandingPageRoutes"

const StyledContainer = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 100%;
  box-shadow: -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor},
    ${({ theme }) => theme.normalBorderWidth} 0 0 0
      ${({ theme }) => theme.borderColor};
`

const StyledPaddingContainer = styled.div`
  display: flex;
  height: 100%;
  box-shadow: -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor},
    ${({ theme }) => theme.normalBorderWidth} 0 0 0
      ${({ theme }) => theme.borderColor};
`
const StyledPaddingColumnContent = styled.div`
  height: 100%;
  width: 20px;
`

const LandingPageContent = () => (
  <StyledContainer>
    <StyledPaddingContainer>
      <StyledPaddingColumnContent />
      <LandingPageRoutes />
      <StyledPaddingColumnContent />
    </StyledPaddingContainer>
  </StyledContainer>
)

export { LandingPageContent }
