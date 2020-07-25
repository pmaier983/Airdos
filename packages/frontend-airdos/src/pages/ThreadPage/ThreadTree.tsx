import React from "react"
import styled from "styled-components"

import { FeedBlock } from "../../components/FeedBlock"

import type { Thread } from "../../typings/api"

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

const renderReplies = (threads: Thread[], offset: number) => {
  return (
    <StyledColumn>
      {threads.map((thread: Thread) => {
        const { replies } = thread
        return (
          <>
            <StyledRowPadding />
            <StyledRow key={thread.id}>
              <StyledColumnPadding padding={offset} />
              <FeedBlock {...thread} />
              {replies && <>{renderReplies(replies, offset + 20)}</>}
            </StyledRow>
          </>
        )
      })}
    </StyledColumn>
  )
}

const ThreadTree: React.FC<{ threads?: Thread[] }> = ({ threads }) => {
  // TODO: create a no threads state
  if (!threads) {
    return <div />
  }

  return <StyledColumn>{renderReplies(threads, 0)}</StyledColumn>
}

export { ThreadTree }
