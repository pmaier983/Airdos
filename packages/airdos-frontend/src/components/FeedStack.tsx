import React from 'react'
import styled from 'styled-components'

import { FeedBlock } from './FeedBlock'
import { FeedInput } from './FeedInput'

import { posts } from '../dud-data/posts'

const FeedStackContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 
    -${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.normalBorderWidth} 0 0 0 ${({ theme }) => theme.borderColor},
     0 -${({ theme }) => theme.normalBorderWidth} 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingRowFeedSeparator = styled.div`
  width: 100%;
  height: 20px;   
`

const PaddingRowFeedStack = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.spacingColor};
`

const LoadingIcon = styled.div`
  display: flex;
  align-self: center;
  font-size: ${({ theme }) => theme.mediumFontSize};
`

const FeedStack = () => (
  <FeedStackContainer>
    <FeedInput />
    <PaddingRowFeedSeparator />
    <FeedContainer>
      {posts.map((post) => (
        <div key={post.text}>
          <FeedBlock {...post} />
          <PaddingRowFeedStack />
        </div>
      ))}
    </FeedContainer>
    <LoadingIcon>Loading ...</LoadingIcon>
  </FeedStackContainer>
)

export { FeedStack }
