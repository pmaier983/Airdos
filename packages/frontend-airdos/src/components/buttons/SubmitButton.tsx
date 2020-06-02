import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  box-shadow: ${({ theme }) => theme.normalHighlightedBoxShadow};
  font-size: ${({ theme }) => theme.largeFontSize};
  font-family: ${({ theme }) => theme.normalFontFamily};
  :hover {
    background-color: ${({ theme }) => theme.focusColor};
    color: ${({ theme }) => theme.contrastFocusColor};
  }
`

const SubmitButton: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
)

export { SubmitButton }
