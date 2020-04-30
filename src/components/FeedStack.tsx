import React from 'react'
import styled from 'styled-components'

import { FeedBlock } from './FeedBlock'

import { posts } from '../.dud-data/post'

const FeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 
    -${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor}, 
     ${({ theme }) => theme.borderWidth} 0 0 0 ${({ theme }) => theme.borderColor},
     0 -${({ theme }) => theme.borderWidth} 0 0 ${({ theme }) => theme.borderColor};
`

const PaddingRowFeedStack = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.spacingColor};
`

const FeedStack = () => (
  <FeedContainer>
    {posts.map((post) => (
      <>
        <FeedBlock text={post.text} />
        <PaddingRowFeedStack />
      </>
    ))}
  </FeedContainer>
)

export { FeedStack }
