import React from "react"
import styled from "styled-components"

const StyledInputBox = styled.textarea`
  width: 100%;
  height: 100px;
  box-shadow: ${({ theme }) => theme.darkBoxShadow};
  border-radius: ${({ theme }) => theme.normalBorderRadius};
  font-size: ${({ theme }) => theme.mediumFontSize};
  resize: vertical;
  font-family: inherit;
  border: none;
  padding: 0;
  :focus {
    outline: none;
  }
`

const FeedInput = () => (
  <StyledInputBox placeholder="What's piqued your interest lately" />
)

export { FeedInput }
