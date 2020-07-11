import React from "react"
import { Route } from "react-router-dom"

import { PrivateRoute } from "../../components/PrivateRoute"
import { ProfilePage } from "../ProfilePage"
import { GroupsRouter } from "../groups/GroupsRouter"
import { LandingPageFeed } from "./LandingPageFeed"

// TODO: find out the true type of these components
export interface IPageRoutes {
  path: string
  Component: React.JSXElementConstructor<any>
  Router: React.JSXElementConstructor<any>
  props?: any
}

export const renderRoutes = (routes: IPageRoutes[]) =>
  routes.map(({ path, props, Component, Router }) => (
    <Router key={path} path={path} {...props}>
      <Component />
    </Router>
  ))

const DummyComponent = () => <div>This Route is not built yet</div>

const landingPageRoutes: IPageRoutes[] = [
  {
    path: "/feed",
    Component: LandingPageFeed,
    Router: Route,
  },
  {
    path: "/groups",
    Component: GroupsRouter,
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
