import React from "react"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    border-radius: ${theme.normalBorderRadius};
    box-shadow: ${theme.normalHighlightedBoxShadow};
    font-size: ${theme.largeFontSize};
    font-family: ${theme.normalFontFamily};
    :hover {
      background-color: ${theme.focusColor};
      color: ${theme.contrastFocusColor};
    }
  `}
`

const SubmitButton: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export { SubmitButton }
