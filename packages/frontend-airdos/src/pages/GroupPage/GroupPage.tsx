import React from "react"
import _ from "lodash/fp"
import { useLocation, Route, Redirect } from "react-router-dom"

import { GroupPageContent } from "./GroupPageContent"
import { GroupsPage } from "./GroupsPage"

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

  return (
    <>
      <Route exact path={`/groups/${pathGroupName}/`}>
        <Redirect to={`/groups/${pathGroupName}/feed`} />
      </Route>
      <Route exact path={`/groups/${pathGroupName}/feed`}>
        <GroupPageContent pathGroupName={pathGroupName}>
          GroupFeed
        </GroupPageContent>
      </Route>
      <Route exact path={`/groups/${pathGroupName}/files`}>
        <GroupPageContent pathGroupName={pathGroupName}>Files</GroupPageContent>
      </Route>
      <Route exact path={`/groups/${pathGroupName}/members`}>
        <GroupPageContent pathGroupName={pathGroupName}>
          Members
        </GroupPageContent>
      </Route>
      <Route exact path={`/groups/${pathGroupName}/settings`}>
        <GroupPageContent pathGroupName={pathGroupName}>
          Settings
        </GroupPageContent>
      </Route>
      <Route exact path="/groups">
        <GroupsPage />
      </Route>
    </>
  )
}

export { GroupPage }
