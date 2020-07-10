import React from "react"
import _ from "lodash/fp"
import { Route } from "react-router-dom"

import { GroupsOverviewPage } from "./GroupsOverviewPage"

// const getUrlGroupName = (path: string) => {
//   const splitPath = path.split("/")
//   const profileIndex = _.findIndex(
//     (pathSegment) => pathSegment === "groups",
//     splitPath
//   )
//   return splitPath[profileIndex + 1]
// }

const GroupsRouter: React.FC = () => {
  // TODO: handle this so that it can handle paths that are not Groups after /groups
  // TODO: make context?
  return (
    <>
      <Route strict path="/groups/">
        <div>Gello?</div>
      </Route>
      <Route exact strict path="/groups">
        <GroupsOverviewPage />
      </Route>
    </>
  )
}

export { GroupsRouter }
