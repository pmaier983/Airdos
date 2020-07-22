import React from "react"
import _ from "lodash/fp"
import { useLocation } from "react-router-dom"

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
  return <div>{threadId}</div>
}

export { ThreadPage }
