import React, { useContext, useState } from "react"
import _ from "lodash/fp"
import styled, { css, ThemeContext } from "styled-components"
import { Link } from "react-router-dom"

import { MaterialIcon } from "./MaterialIcon"
import type { Post } from "../typings/api"

const StyledFeedBlockContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.basicBoxShadow};
    border-radius: ${theme.normalBorderRadius};
  `}
  width: 100%;
  padding: 5px 5px 0 5px;
  overflow: hidden;
`

const StyledStrongFirstWord = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.mediumLargeFontSize};
    font-weight ${theme.normalFontWeight};
  `}
`

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

const IconColumnPadding = styled.div`
  width: 3px;
`

const ContinueColumnPadding = styled.div`
  width: 6px;
`

const FeedBlock: React.FC<Post> = ({ text, replies, id }) => {
  const [isLiked, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(_.random(0, 100))
  const theme = useContext(ThemeContext)

  // TODO: handle this better
  const textArray = text
    ? text.split(" ")
    : ["There", "was", "no", "text", "in", "this", "post"]
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
    <StyledFeedBlockContainer>
      <>
        <StyledStrongFirstWord>{`${firstWord} `}</StyledStrongFirstWord>
        {remainingText}
      </>
      <StyledFooterContainer>
        <StyledLikesContainer>
          <StyledLikesCount>{likeCount}</StyledLikesCount>
          <MaterialIcon
            name={isLiked ? "emoji_objects" : "emoji_objects_outlined"}
            size="20px"
            color={theme.iconColor}
            onClick={handleLike}
          />
        </StyledLikesContainer>
        <MaterialIcon name="reply" size="20px" color={theme.iconColor} />
        <IconColumnPadding />
        <MaterialIcon
          name="record_voice_over"
          size="20px"
          color={theme.iconColor}
        />
        <IconColumnPadding />
        <MaterialIcon name="save" size="20px" color={theme.iconColor} />
        {replies && (
          <>
            <ContinueColumnPadding />
            <Link to={`post/${id}`}>
              <MaterialIcon
                name="next_plan"
                size="20px"
                color={theme.iconColor}
              />
            </Link>
          </>
        )}
      </StyledFooterContainer>
    </StyledFeedBlockContainer>
  )
}

export { FeedBlock }
