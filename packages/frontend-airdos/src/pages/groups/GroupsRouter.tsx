import React from "react"
import { Route } from "react-router-dom"

import { GroupsOverviewPage } from "./GroupsOverviewPage"
import { GroupPage } from "./GroupPage"

const GroupsRouter: React.FC = () => (
  <>
    <Route strict path="/groups/:name">
      <GroupPage />
    </Route>
    <Route exact strict path="/groups">
      <GroupsOverviewPage />
    </Route>
  </>
)

export { GroupsRouter }
