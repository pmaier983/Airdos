import React, { useState } from "react"
import _ from "lodash/fp"
import styled, { css } from "styled-components"

import { MaterialIcon } from "../../components/MaterialIcon"

import type { Post } from "../../typings/api"

const StyledPostHeadContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.darkBoxShadow};
    border-radius: ${theme.normalBorderRadius};
  `}
  padding: 5px 5px 0 5px;
`

const StyledEmphasisedFirstWord = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.mediumLargeFontSize};
    font-weight ${theme.normalFontWeight};
  `}
`

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`

const StyledLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLikesCount = styled.div`
  align-self: center;
  cursor: pointer;
`

const IconPadding = styled.div`
  width: 3px;
`

const PostHead: React.FC<{ post: Post }> = ({ post: { text } }) => {
  const [isLiked, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(_.random(0, 100))
  const textArray = text.split(" ")
  const [firstWord, ...allButFirstWord] = textArray
  const remainingText = allButFirstWord.join(" ")

  const handleLike = () => {
    setLike((isCurrentlyLiked) => {
      if (isCurrentlyLiked) {
        setLikeCount((currentLikeCount) => currentLikeCount - 1)
      } else {
        setLikeCount((currentLikeCount) => currentLikeCount + 1)
      }
      return !isCurrentlyLiked
    })
  }

  return (
    <StyledPostHeadContainer>
      <>
        <StyledEmphasisedFirstWord>{`${firstWord} `}</StyledEmphasisedFirstWord>
        {remainingText}
      </>
      <StyledFooterContainer>
        <StyledLikesContainer>
          <StyledLikesCount>{likeCount}</StyledLikesCount>
          <MaterialIcon
            name={isLiked ? "emoji_objects" : "emoji_objects_outlined"}
            size="20px"
            onClick={handleLike}
          />
        </StyledLikesContainer>
        <MaterialIcon name="reply" size="20px" />
        <IconPadding />
        <MaterialIcon name="record_voice_over" size="20px" />
        <IconPadding />
        <MaterialIcon name="save" size="20px" />
      </StyledFooterContainer>
    </StyledPostHeadContainer>
  )
}

export { PostHead }
