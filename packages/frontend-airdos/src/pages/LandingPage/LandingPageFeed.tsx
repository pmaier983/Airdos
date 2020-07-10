import React from "react"
import { GET_POSTS } from "./LandingPageQueries"

import { FeedStack } from "../../components/FeedStack"

const LandingPageFeed: React.FC = () => {
  return <FeedStack query={GET_POSTS} />
}

export { LandingPageFeed }
