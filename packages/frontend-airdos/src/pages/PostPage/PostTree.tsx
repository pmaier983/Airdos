import React from "react"
import styled from "styled-components"

import { PostBlock } from "./PostBlock"

import type { Post } from "../../typings/api"

const StyledColumnPadding = styled.div`
  width: ${({ padding }: { padding: number }) => `${padding}px`};
`

const StyledRowPadding = styled.div`
  height: 10px;
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`

const renderReplies = (posts: Post[], offset: number) => {
  return (
    <StyledColumn>
      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <StyledRowPadding />
            <StyledRow>
              <StyledColumnPadding padding={offset} />
              <PostBlock {...post} />
            </StyledRow>
            {post.replies && renderReplies(post.replies, offset + 20)}
          </div>
        )
      })}
    </StyledColumn>
  )
}

const PostTree: React.FC<{ posts?: Post[] }> = ({ posts }) => {
  // TODO: create a no posts state
  if (!posts) {
    return <div />
  }

  return <StyledColumn>{renderReplies(posts, 0)}</StyledColumn>
}

export { PostTree }
