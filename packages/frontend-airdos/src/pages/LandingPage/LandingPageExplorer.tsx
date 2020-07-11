import React from "react"
import styled from "styled-components"

const StyledPaddingRowPageTop = styled.div`
  width: 100%;
  height: 20px;
  z-index: 2;
`

const StyledContainer = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  height: 100%;
  top: 0px;
`

const StyledExplorerSearch = styled.input`
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  height: ${({ theme }) => theme.largeFontSize};
  box-shadow: ${({ theme }) => theme.basicBoxShadow};
  border: none;
  font-family: inherit;
  :focus {
    outline: none;
  }
`

const LandingPageExplorer = () => (
  <StyledContainer>
    <StyledPaddingRowPageTop />
    <StyledExplorerSearch placeholder="Explore Airdos" />
  </StyledContainer>
)

export { LandingPageExplorer }
