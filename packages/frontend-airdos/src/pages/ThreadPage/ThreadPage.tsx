import React from "react"
import _ from "lodash/fp"
import { useLocation } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { GET_THREAD_BY_ID } from "./ThreadPageQueries"
import { ThreadHead } from "./ThreadHead"
import { ThreadTree } from "./ThreadTree"

import type { Thread } from "../../typings/api"

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

const getUrlThreadId = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "thread",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const ThreadPage = () => {
  const { pathname } = useLocation()
  const threadId = getUrlThreadId(pathname)

  const { data, loading, error } = useQuery<{ threadById: Thread }>(
    GET_THREAD_BY_ID,
    {
      variables: { id: threadId },
    }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error</div>
  }

  const { replies, ...threadHead } = data.threadById

  return (
    <StyledPageContainer>
      <StyledRowPaddingPage />
      <ThreadHead thread={threadHead} />
      <ThreadTree threads={replies} />
    </StyledPageContainer>
  )
}

export { ThreadPage }
