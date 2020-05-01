import React, { useState } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

import { MaterialIcon } from './MaterialIcon'

const FeedBlockContainer = styled.div`
  padding: 2px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.mediumFontSize};
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const PaddingTextColumn = styled.div`
  height: 100%;
  width: 10px;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LikesCount = styled.div`
  cursor: pointer;
`

interface IFeedBlockProps {
  text: string,
  location: string,
  postType: string,
  title: string,
}

const FeedBlock: React.FC<IFeedBlockProps> = ({ text, title }) => {
  const [isLiked, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(_.random(0, 100))

  const handleLike = () => {
    setLike((isCurrentlyLiked) => {
      if (isCurrentlyLiked) {
        setLikeCount((currentLikeCount) => currentLikeCount -1)
      } else {
        setLikeCount((currentLikeCount) => currentLikeCount +1)
      }
      return !isCurrentlyLiked
    })
  }
  return (
    <FeedBlockContainer>
      <HeaderContainer>
        <TitleContainer>{title}</TitleContainer>
        <MaterialIcon name="save" size="18px" onClick={() => console.log('save post')} />
      </HeaderContainer>
      <TextContainer>
        <PaddingTextColumn />
        {text}
        <PaddingTextColumn />
      </TextContainer>
      <FooterContainer>
        <MaterialIcon name="record_voice_over" size="18px" onClick={() => console.log('repost')} />
        <LikesContainer>
          <LikesCount>{likeCount}</LikesCount>
          <MaterialIcon name={isLiked ? 'favorite' : 'favorite_border'} size="18px" onClick={handleLike} />
        </LikesContainer>
      </FooterContainer>
    </FeedBlockContainer>
  )
}

export { FeedBlock }
