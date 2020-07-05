import React from "react"
import { GET_GROUP_POSTS_BY_NAME } from "./GroupPageQueries"
import { Group } from "../../typings/api"

import { FeedStack } from "../../components/FeedStack"

interface IGroupPageFeedProps {
  group: Group
}

const GroupPageFeed: React.FC<IGroupPageFeedProps> = ({ group }) => {
  return (
    <FeedStack
      query={GET_GROUP_POSTS_BY_NAME}
      variables={{ name: group.name }}
      postsPath="groupByName.posts"
    />
  )
}

export { GroupPageFeed }
