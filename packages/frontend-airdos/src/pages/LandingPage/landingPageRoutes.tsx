import React from "react"
import { Route, Switch } from "react-router-dom"

import { PrivateRoute } from "../../components/PrivateRoute"
import { ProfilePage } from "../ProfilePage"
import { GroupsRouter } from "../groups/GroupsRouter"
import { PostPage } from "../PostPage"
import { LandingPageFeed } from "./LandingPageFeed"

const LandingPageRoutes = () => (
  <Switch>
    <Route path="/feed">
      <LandingPageFeed />
    </Route>
    <Route path="/groups">
      <GroupsRouter />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <PrivateRoute path="/messages">
      <div>This Route has not been built yet</div>
    </PrivateRoute>
    <PrivateRoute path="/library">
      <div>This Route has not been built yet</div>
    </PrivateRoute>
    <Route path="/post">
      <PostPage />
    </Route>
  </Switch>
)

export { LandingPageRoutes }
