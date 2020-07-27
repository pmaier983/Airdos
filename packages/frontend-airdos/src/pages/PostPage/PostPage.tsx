import React from "react"
import _ from "lodash/fp"
import { useLocation } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { GET_POST_BY_ID } from "./PostPageQueries"
import { PostHead } from "./PostHead"
import { PostTree } from "./PostTree"

import type { Post } from "../../typings/api"

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`

const StyledRowPaddingPage = styled.div`
  height: 10px;
  width: 100%;
`

const getUrlPostId = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "post",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const PostPage = () => {
  const { pathname } = useLocation()
  const postId = getUrlPostId(pathname)

  const { data, loading, error } = useQuery<{ postById: Post }>(
    GET_POST_BY_ID,
    {
      variables: { id: postId },
    }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  const { replies, ...postHead } = data.postById

  return (
    <StyledPageContainer>
      <StyledRowPaddingPage />
      <PostHead post={postHead} />
      <PostTree posts={replies} />
    </StyledPageContainer>
  )
}

export { PostPage }
