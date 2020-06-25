import React from "react"
import { Route } from "react-router-dom"

import { PrivateRoute } from "../../components/PrivateRoute"
import { FeedStack } from "../../components/FeedStack"
import { ProfilePage } from "../ProfilePage"
import { GroupPage } from "../GroupPage"

// TODO: find out the true type of these components
export interface IPageRoutes {
  path: string
  Component: React.JSXElementConstructor<any>
  Router: React.JSXElementConstructor<any>
}

export const renderRoutes = (routes: IPageRoutes[]) =>
  routes.map(({ path, Component, Router }) => (
    <Router key={path} path={path}>
      <Component />
    </Router>
  ))

const DummyComponent = () => <div>This Route is not built yet</div>

const landingPageRoutes: IPageRoutes[] = [
  {
    path: "/feed",
    Component: FeedStack,
    Router: Route,
  },
  {
    path: "/groups",
    Component: GroupPage,
    Router: Route,
  },
  {
    path: "/profile",
    Component: ProfilePage,
    Router: Route,
  },
  {
    path: "/messages",
    Component: DummyComponent,
    Router: PrivateRoute,
  },
  {
    path: "/library",
    Component: DummyComponent,
    Router: PrivateRoute,
  },
]

export { landingPageRoutes }
