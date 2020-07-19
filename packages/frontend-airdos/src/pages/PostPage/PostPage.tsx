import React from "react"
import _ from "lodash/fp"
import { useLocation } from "react-router-dom"

const getUrlPostID = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "post",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const PostPage = () => {
  const { pathname } = useLocation()
  const postID = getUrlPostID(pathname)
  return <div>{postID}</div>
}

export { PostPage }
