import React from "react"
import _ from "lodash/fp"
import { useLocation, Route, Redirect } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import { GET_GROUP_BY_NAME } from "./GroupPageQueries"
import { Group } from "../../typings/api"
import { GroupPageContent } from "./GroupPageContent"
import { GroupsPage } from "./GroupsPage"
import { GroupPageFeed } from "./GroupPageFeed"

const getUrlGroupName = (path: string) => {
  const splitPath = path.split("/")
  const profileIndex = _.findIndex(
    (pathSegment) => pathSegment === "groups",
    splitPath
  )
  return splitPath[profileIndex + 1]
}

const GroupPage: React.FC = () => {
  const location = useLocation()

  // TODO: handle this so that it can handle paths that are not Groups after /groups
  // TODO: make context?
  const pathGroupName = getUrlGroupName(location.pathname)

  const { data, loading, error } = useQuery<{ groupByName: Group }>(
    GET_GROUP_BY_NAME,
    {
      variables: {
        name: pathGroupName,
      },
    }
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>This group was not found</div>
  }

  const group = data.groupByName
  const { name } = group

  return (
    <>
      <Route exact path={`/groups/${name}/`}>
        <Redirect to={`/groups/${name}/feed`} />
      </Route>
      <Route exact path={`/groups/${name}/feed`}>
        <GroupPageContent group={group}>
          <GroupPageFeed group={group} />
        </GroupPageContent>
      </Route>
      <Route exact path={`/groups/${name}/files`}>
        <GroupPageContent group={group}>Files</GroupPageContent>
      </Route>
      <Route exact path={`/groups/${name}/members`}>
        <GroupPageContent group={group}>Members</GroupPageContent>
      </Route>
      <Route exact path={`/groups/${name}/settings`}>
        <GroupPageContent group={group}>Settings</GroupPageContent>
      </Route>
      <Route exact path="/groups">
        <GroupsPage />
      </Route>
    </>
  )
}

export { GroupPage }
