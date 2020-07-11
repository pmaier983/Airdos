import React from "react"
import styled, { css } from "styled-components"
import _ from "lodash/fp"
import { useQuery } from "@apollo/react-hooks"

import { Post } from "../typings/api"
import { FeedBlock } from "./FeedBlock"
import { FeedInput } from "./FeedInput"

const StyledPaddingRowFeedTop = styled.div`
  height: 20px;
`

const StyledFeedStackContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    box-shadow: -${theme.normalBorderWidth} 0 0 0 ${theme.borderColor},
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

type FeedStackProps = {
  query: any
  variables?: any
  postsPath?: string
}

const FeedStack: React.FC<FeedStackProps> = ({
  query,
  variables,
  postsPath,
}) => {
  const { data, loading, error } = useQuery<{ posts: Post[] }>(query, {
    variables,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  const posts: [Post] = postsPath
    ? _.get(postsPath, data)
    : _.get("posts", data)

  return (
    <StyledFeedStackContainer>
      <StyledPaddingRowFeedTop />
      <FeedInput />
      <StyledPaddingRowFeedSeparator />
      <StyledFeedContainer>
        {posts.map((post) => (
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
