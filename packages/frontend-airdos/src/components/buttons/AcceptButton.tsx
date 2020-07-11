import React from "react"
import styled, { css } from "styled-components"
import { readableColor } from "polished"

import { MaterialIcon } from "../MaterialIcon"

const StyledGroupButton = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.largeBorderRadius};
    box-shadow: 0 0 0 ${theme.normalBorderWidth} ${theme.acceptColor};
    font-size: ${theme.largeFontSize};
    color: ${theme.acceptColor};
    background-color: ${theme.lightAcceptColor};
    :hover {
      background-color: ${theme.acceptColor};
      color: ${readableColor(
        theme.acceptColor,
        theme.lightContrastFontColor,
        theme.darkContrastFontColor
      )};
      cursor: pointer;
    }
  `};
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
`

const AcceptButton: React.FC = () => (
  <StyledGroupButton>
    Groups
    <MaterialIcon name="add" size="26px" display="flex" />
  </StyledGroupButton>
)

export { AcceptButton }
