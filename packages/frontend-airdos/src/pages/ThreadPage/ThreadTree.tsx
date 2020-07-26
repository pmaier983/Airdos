import React from "react"
import styled from "styled-components"

import { ThreadBlock } from "./ThreadBlock"

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
        return (
          <div key={thread.id}>
            <StyledRowPadding />
            <StyledRow>
              <StyledColumnPadding padding={offset} />
              <ThreadBlock {...thread} />
            </StyledRow>
            {thread.replies && renderReplies(thread.replies, offset + 20)}
          </div>
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
