import React from "react"
import { Route, Redirect } from "react-router-dom"

import type { Group } from "../../../typings/api"

const GroupPageRouter: React.FC<{ group: Group }> = ({ group: { name } }) => (
  <>
    <Route exact path={`/groups/${name}/`}>
      <Redirect to={`/groups/${name}/feed`} />
    </Route>
    <Route exact path={`/groups/${name}/feed`}>
      Feed
    </Route>
    <Route exact path={`/groups/${name}/files`}>
      Files
    </Route>
    <Route exact path={`/groups/${name}/members`}>
      Members
    </Route>
    <Route exact path={`/groups/${name}/settings`}>
      Settings
    </Route>
  </>
)

export { GroupPageRouter }
