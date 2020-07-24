import React from "react"
import styled, { css } from "styled-components"

import type { Thread } from "../../typings/api"

const StyledThreadHeadContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.darkBoxShadow};
    border-radius: ${theme.normalBorderRadius};
  `}
  padding: 5px 5px;
`

const EmphasisedFirstWord = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.mediumLargeFontSize};
    font-weight ${theme.normalFontWeight};
  `}
`

const ThreadHead: React.FC<{ thread: Thread }> = ({ thread: { text } }) => {
  const textArray = text.split(" ")
  const [firstWord, ...allButFirstWord] = textArray
  const remainingText = allButFirstWord.join(" ")

  return (
    <StyledThreadHeadContainer>
      <EmphasisedFirstWord>{`${firstWord} `}</EmphasisedFirstWord>
      {remainingText}
    </StyledThreadHeadContainer>
  )
}

export { ThreadHead }
