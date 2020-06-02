import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import { GET_POSTS, IGetPosts } from '../queries'
import { FeedBlock } from './FeedBlock'
import { FeedInput } from './FeedInput'

const StyledFeedStackContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    box-shadow: 
      -${theme.normalBorderWidth} 0 0 0 ${theme.borderColor}, 
      ${theme.normalBorderWidth} 0 0 0 ${theme.borderColor},
      0 -${theme.normalBorderWidth} 0 0 ${theme.borderColor};
  `}

`

const StyledPaddingRowFeedSeparator = styled.div`
  width: 100%;
  height: 20px;   
`

const StyledPaddingRowFeedStack = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.spacingColor};
`

const StyledLoadingIcon = styled.div`
  display: flex;
  align-self: center;
  font-size: ${({ theme }) => theme.mediumFontSize};
`

const FeedStack = () => {
  const {
    data, loading, error,
  } = useQuery<IGetPosts>(GET_POSTS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <StyledFeedStackContainer>
      <FeedInput />
      <StyledPaddingRowFeedSeparator />
      <StyledFeedContainer>
        {data?.posts.map((post) => (
          <div key={post?.text}>
            <FeedBlock {...post} />
            <StyledPaddingRowFeedStack />
          </div>
        ))}
      </StyledFeedContainer>
      <StyledLoadingIcon>Loading ...</StyledLoadingIcon>
    </StyledFeedStackContainer>
  )
}

export { FeedStack }
