import React from "react"
import { Route, Redirect } from "react-router-dom"

import type { Group } from "../../../typings/api"
import { GroupPageFeed } from "./GroupPageFeed"

const GroupPageRouter: React.FC<{ group: Group }> = ({ group }) => (
  <>
    <Route exact path={`/groups/${group.name}/`}>
      <Redirect to={`/groups/${group.name}/feed`} />
    </Route>
    <Route exact path={`/groups/${group.name}/feed`}>
      <GroupPageFeed group={group} />
    </Route>
    <Route exact path={`/groups/${group.name}/files`}>
      Files
    </Route>
    <Route exact path={`/groups/${group.name}/members`}>
      Members
    </Route>
    <Route exact path={`/groups/${group.name}/settings`}>
      Settings
    </Route>
  </>
)

export { GroupPageRouter }
